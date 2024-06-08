'use client';

import type { SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/app/commons/components/ui/form';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/app/commons/components/ui/multi-select';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: CustomRHFMultiSelectOption[];
  description?: string;
  placeholder?: string;
}

export interface CustomRHFMultiSelectOption {
  value: string;
  label: string;
}

export const CustomRHFMultiSelect = (props: Props) => {
  const { name, label, description, options, placeholder = 'Choose one or more options' } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <MultiSelector onValuesChange={field.onChange} values={field.value}>
            <MultiSelectorTrigger>
              <MultiSelectorInput className="text-sm" placeholder={placeholder} />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
              <MultiSelectorList>
                {options.map((option) => (
                  <MultiSelectorItem className="capitalize" key={option.value} value={option.value}>
                    {option.label}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </MultiSelectorContent>
          </MultiSelector>
          <FormMessage className="text-xs text-right" />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
