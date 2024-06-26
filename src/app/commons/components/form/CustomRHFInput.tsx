'use client';

import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/app/commons/components/ui/form';
import { Input } from '@/app/commons/components/ui/input';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  description?: string;
}

export const CustomRHFInput = (props: Props) => {
  const { name, type, label, autoComplete, description } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={type === 'hidden' ? 'hidden' : ''}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <>
              <Input type={type} {...field} autoComplete={autoComplete} />
            </>
          </FormControl>
          <FormMessage className="text-xs text-right" />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
