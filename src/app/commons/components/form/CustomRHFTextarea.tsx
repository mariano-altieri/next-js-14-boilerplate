'use client';

import type { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/app/commons/components/ui/form';
import { Textarea } from '../ui/textarea';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  description?: string;
}

export const CustomRHFTextarea = (props: Props) => {
  const { name, label, description } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <>
              <Textarea {...field} />
            </>
          </FormControl>
          <FormMessage className="text-xs text-right" />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
