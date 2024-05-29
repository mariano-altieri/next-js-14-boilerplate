'use client';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/app/commons/components/ui/form';
import { Input } from '@/app/commons/components/ui/input';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const CustomRHFInput = (props: Props) => {
  const { name, type, label, autoComplete } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} autoComplete={autoComplete} />
          </FormControl>
          <FormMessage className="text-xs text-right" />
        </FormItem>
      )}
    />
  );
};
