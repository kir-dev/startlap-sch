'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TextField } from '@/components/form-field/text-field'
import { TextareaField } from '@/components/form-field/textarea-field'
import { CheckLink } from '@/components/links/CheckLink'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCreateSubmission } from '@/hooks/mutations/use-create-submission'
import { CreateSubmissionDto } from '@/types/submission.type'

const CreateLinksFormSchema = z.object({
  title: z.string({ required_error: 'Kötelező mező' }).min(3, { message: 'Legalább 3 karakter hosszú legyen' }),
  url: z.string().url({ message: 'Nem megfelelő URL formátum' }),
  slug: z.string().regex(/^[a-z-]+$/, { message: 'A slug csak kisbetűket és kötőjelet tartalmazhat' }),
  description: z.string({ required_error: 'Kötelező mező' }),
  iconUrl: z.string().url({ message: 'Nem megfelelő URL formátum' }).optional(),
  keywords: z.string().optional(),
})

export function CreateLinksForm() {
  const createSubmission = useCreateSubmission()
  const router = useRouter()
  const form = useForm<z.infer<typeof CreateLinksFormSchema>>({
    resolver: zodResolver(CreateLinksFormSchema),
  })

  const onSubmit = form.handleSubmit(data => {
    const dto: CreateSubmissionDto = {
      title: data.title,
      url: data.url,
      description: data.description,
      iconUrl: data.iconUrl,
      keywords: data.keywords?.split(',') ?? [],
      slug: data.slug,
    }
    createSubmission.trigger(dto).then(() => {
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
        <TextField control={form.control} name='keywords' label='Link kulcsszavai' />
        <Button className='mt-5' type='submit'>
          Mentés
        </Button>
      </form>
    </Form>
  )
}
