'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TagInputField } from '@/components/form-field/tag-input-field'
import { TextField } from '@/components/form-field/text-field'
import { TextareaField } from '@/components/form-field/textarea-field'
import { CheckLink } from '@/components/links/CheckLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCreateSubmission } from '@/hooks/mutations/use-create-submission'

const CreateLinksFormSchema = z.object({
  title: z.string({ required_error: 'Kötelező mező' }).min(3, { message: 'Legalább 3 karakter hosszú legyen' }),
  url: z.string({ required_error: 'Kötelező mező' }).url({ message: 'Nem megfelelő URL formátum' }),
  slug: z.string({ required_error: 'Kötelező mező' }).regex(/^[a-z-]+$/, { message: 'A slug csak kisbetűket és kötőjelet tartalmazhat' }),
  description: z.string({ required_error: 'Kötelező mező' }),
  iconUrl: z.string({ required_error: 'Kötelező mező' }).url({ message: 'Nem megfelelő URL formátum' }).optional(),
  keywords: z.array(z.string()),
})

export function CreateLinksForm() {
  const createSubmission = useCreateSubmission()
  const router = useRouter()
  const form = useForm<z.infer<typeof CreateLinksFormSchema>>({
    resolver: zodResolver(CreateLinksFormSchema),
    defaultValues: {
      keywords: [],
    },
  })

  const onSubmit = form.handleSubmit(data => {
    createSubmission.trigger(data).then(() => {
      router.push('/profile')
    })
  })

  const link = form.watch('url')

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={onSubmit}>
        <TextField control={form.control} name='title' label='Link neve' />
        <TextField control={form.control} name='url' label='Link címe' placeholder='https://' />
        <CheckLink link={link} />
        <TextField control={form.control} name='iconUrl' label='Link ikon URL-je' placeholder='https://' />
        <TextField control={form.control} name='slug' label='Link olvasható slug-ja' />
        <TextareaField control={form.control} name='description' label='Link leírása' />
        <TagInputField control={form.control} name='keywords' label='Link kulcsszavai (üss vesszőt)' />
        <Button className='mt-5' type='submit'>
          Mentés
        </Button>
      </form>
    </Form>
  )
}
