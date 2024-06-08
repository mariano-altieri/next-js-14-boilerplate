'use client';

import type { SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/app/commons/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/commons/components/ui/select';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: CustomRHFSelectOption[];
  description?: string;
  placeholder?: string;
}

export interface CustomRHFSelectOption {
  value: string;
  label: string;
}

export const CustomRHFSelect = (props: Props) => {
  const { name, label, options, description, placeholder = 'Choose an option' } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="capitalize">
              <SelectTrigger>
                <SelectValue className="text-sm" placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem className="capitalize" key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-xs text-right" />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
