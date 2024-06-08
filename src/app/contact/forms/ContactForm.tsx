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

import { Contact, contactSchema } from '../schemas/contact.schema';

export function ContactForm() {
  const form = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: Contact): Promise<void> {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show a toast notification
      toast({
        title: 'Message sent successfully',
        description: `Message sent: ${JSON.stringify(values)}`,
      });
    } catch (error: any) {
      setError(
        error?.message ?? 'An error occurred while sending the message. Please try again later.',
      );
    }

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        {error && <FormError errorMessage={error} />}

        <CustomRHFInput label="Name *" name="name" type="text" />
        <CustomRHFInput label="Email *" name="email" type="email" />
        <CustomRHFTextarea label="Message *" name="message" />

        <div className="pt-2 flex justify-end gap-2">
          <SubmitButton
            label="Send message"
            onSubmitLabel="Sending message..."
            submitting={isSubmitting}
            className="w-auto"
          />
        </div>
      </form>
    </Form>
  );
}
