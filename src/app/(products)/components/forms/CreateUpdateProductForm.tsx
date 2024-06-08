'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/app/commons/components/ui/form';
import { CustomRHFInput } from '@/app/commons/components/form/CustomRHFInput';
import { CustomRHFTextarea } from '@/app/commons/components/form/CustomRHFTextarea';
import { SubmitButton } from '@/app/commons/components/form/SubmitButton';
import { FormError } from '@/app/commons/components/form/FormError';
import { useToast } from '@/app/commons/components/ui/use-toast';
import { CustomRHFSelect } from '@/app/commons/components/form/CustomRHFSelect';
import { Button } from '@/app/commons/components/ui/button';

import type { Product } from '../../entities/product.entity';
import {
  CreateUpdateProduct,
  createUpdateProductSchema,
} from '../../schemas/create-update-product-schema';
import { updateProduct } from '../../services/products.actions';
import { CustomRHFMultiSelect } from '@/app/commons/components/form/CustomRHFMultiSelect';
import { someTags } from '../../data/tags';

interface Props {
  categories: string[];
  product?: Product;
}

export function CreateUpdateProductForm(props: Props) {
  const { product, categories } = props;

  const form = useForm<CreateUpdateProduct>({
    resolver: zodResolver(createUpdateProductSchema),
    defaultValues: {
      id: product?.id,
      title: product?.title ?? '',
      description: product?.description ?? '',
      category: product?.category?.toLowerCase(),
      price: product?.price ?? 0,
      discountPercentage: product?.discountPercentage ?? 0,
      stock: product?.stock ?? 0,
      tags: product?.tags ?? [],
      brand: product?.brand ?? '',
      sku: product?.sku ?? '',
      images: product?.images ?? [],
      thumbnail: product?.thumbnail ?? '',
    },
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: CreateUpdateProduct): Promise<void> {
    setIsSubmitting(true);
    setError(null);

    try {
      await updateProduct(values);

      toast({
        title: 'Product created/updated successfully',
        description: `Just a test. This won't be persisted in DB. Check your network to see the request.`,
      });
    } catch (error: any) {
      setError(error?.message ?? 'An error occurred');
    }

    setIsSubmitting(false);
  }

  function onDeleteProduct() {
    toast({
      title: 'Product deleted successfully',
      description: `Just a test. This won't be persisted in DB.`,
    });
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        {error && <FormError errorMessage={error} />}

        <CustomRHFInput label="Id" name="id" type="hidden" />
        <CustomRHFInput label="Title *" name="title" type="text" />
        <CustomRHFTextarea label="Description *" name="description" />
        <CustomRHFInput label="Price *" name="price" type="number" />
        <CustomRHFSelect
          label="Category *"
          name="category"
          options={categories.map((category) => ({
            value: category.toLowerCase(),
            label: category,
          }))}
          placeholder="Select a category"
        />
        <CustomRHFInput label="Discount Percentage *" name="discountPercentage" type="number" />
        <CustomRHFInput label="Stock *" name="stock" type="number" />
        <CustomRHFMultiSelect
          label="Tags"
          name="tags"
          options={someTags.map((tag) => ({ value: tag, label: tag })) ?? []}
          placeholder="Add some tags"
        />
        <CustomRHFInput label="Brand" name="brand" type="text" />

        <div className="pt-2 flex justify-end gap-2">
          <Button type="button" variant="destructive" onClick={onDeleteProduct}>
            Delete product
          </Button>
          <SubmitButton
            label={product?.id ? 'Update product' : 'Create product'}
            onSubmitLabel={product?.id ? 'Updating product...' : 'Creating product...'}
            submitting={isSubmitting}
            className="w-auto"
          />
        </div>
      </form>
    </Form>
  );
}
