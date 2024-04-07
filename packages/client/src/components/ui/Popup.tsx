'use client'
import { PropsWithChildren, useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface PopupProps extends PropsWithChildren {
  title: string
  description: string
  onConfirm: (feedback: string) => void
}

export default function Popup({ title, onConfirm, description, children }: PopupProps) {
  const [feedback, setFeedback] = useState('')
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <textarea className={'rounded border border-black p-1'} onChange={e => setFeedback(e.target.value)} value={feedback} />
          <DialogTrigger onClick={() => onConfirm(feedback)}>OK</DialogTrigger>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
