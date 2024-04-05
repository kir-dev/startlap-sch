import { HTMLInputTypeAttribute } from 'react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

interface TextareaFieldProps<TName extends FieldPath<TFieldValues>, TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: TName
  label: string
  description?: string
}

export function TextareaField<TName extends FieldPath<TFieldValues>, TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
}: TextareaFieldProps<TName, TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
        </FormItem>
      )}
    />
  )
}
