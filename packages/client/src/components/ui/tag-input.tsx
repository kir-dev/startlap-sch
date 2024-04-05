import { useEffect, useState } from 'react'
import { TbX } from 'react-icons/tb'

import { Input } from '@/components/ui/input'

interface TagInputProps {
  value: string[]
  onChange: (value: string[]) => void
}

export function TagInput({ value, onChange }: TagInputProps) {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const split = e.target.value.split(',')
    const last = split.pop()
    const newTags = [...tags, ...split.filter(Boolean)]
    setTags(newTags)
    onChange(newTags)
    setInputValue(last ?? '')
  }

  const onRemove = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
    onChange(tags.filter((_, i) => i !== index))
  }

  useEffect(() => {
    if (Array.isArray(value)) setTags(value)
  }, [value])

  return (
    <>
      <Input value={inputValue} onChange={onChangeInput} />
      <div className='flex flex-wrap items-center gap-2'>
        {tags.map((tag, index) => (
          <TagItem key={index} value={tag} onRemove={() => onRemove(index)} />
        ))}
      </div>
    </>
  )
}

interface TagItemProps {
  value: string
  onRemove: () => void
}

function TagItem({ value, onRemove }: TagItemProps) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onRemove()
  }
  return (
    <div className='flex w-fit items-center gap-1 overflow-hidden rounded-sm bg-white p-1'>
      <p className='truncate'>{value}</p>
      <button className='text-slate-500' onClick={onClick}>
        <TbX />
      </button>
    </div>
  )
}
