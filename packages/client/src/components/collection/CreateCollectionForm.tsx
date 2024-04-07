'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TextField } from '@/components/form-field/text-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCreateCollection } from '@/hooks/mutations/use-create-collection'

const CreateCollectionFormSchema = z.object({
  name: z.string({ required_error: 'Kötelező mező' }).min(3, { message: 'Legalább 3 karakter hosszú legyen' }),
  slug: z.string({ required_error: 'Kötelező mező' }).regex(/^[a-z-]+$/, { message: 'A slug csak kisbetűket és kötőjelet tartalmazhat' }),
  bannerUrl: z.string({ required_error: 'Kötelező mező' }).url({ message: 'Nem megfelelő URL formátum' }),
  linkIds: z.array(z.string()),
})

export function CreateCollectionForm() {
  const createSubmission = useCreateCollection()
  const router = useRouter()
  const form = useForm<z.infer<typeof CreateCollectionFormSchema>>({
    resolver: zodResolver(CreateCollectionFormSchema),
    defaultValues: {
      linkIds: [],
    },
  })

  const onSubmit = form.handleSubmit(data => {
    createSubmission.trigger(data).then(() => {
      router.push('/collections')
    })
  })

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={onSubmit}>
        <TextField control={form.control} name='name' label='Kollekció neve' />
        <TextField control={form.control} name='bannerUrl' label='Kollekció szalagkép URL-je' placeholder='https://' />
        <TextField control={form.control} name='slug' label='Kollekció olvasható slug-ja' />
        <Button className='mt-5' type='submit'>
          Mentés
        </Button>
      </form>
    </Form>
  )
}
