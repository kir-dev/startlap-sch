'use client'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Popup from '@/components/ui/Popup'
import { cn } from '@/lib/utils'
import { Submission } from '@/types/submission.type'

export default function SubmissionCard({ submission }: { submission: Submission }) {
  const getStatusColor = (status: Submission['status']) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-200'
      case 'DECLINED':
        return 'bg-red-200'
      case 'IN_REVIEW':
        return 'bg-amber-200'
      default:
        return 'bg-gray-200'
    }
  }

  const iconSrc =
    submission.iconUrl === null
      ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${submission.url.replace('www.', '')}&size=128`
      : submission.iconUrl

  return (
    <div className='flex w-96 flex-col items-center rounded-xl p-2'>
      <div className={`-z-1 ${getStatusColor(submission.status)} -mb-3 flex h-10 w-full items-center rounded-t-xl p-1`}>
        <h4 className='-mt-2 w-full text-center'>{submission.id}</h4>
      </div>
      <div className='relative w-full rounded-xl bg-white p-2 pb-1'>
        <div className='ml-2 flex'>
          <img
            className={cn('ml-0 mt-2 aspect-square flex-none', submission.iconUrl === null ? 'h-8 w-8' : 'h-1/6 w-1/6')}
            src={iconSrc}
            alt='ikon'
            width={100}
            height={100}
          />
          <div className='ml-2 h-2/3 flex-grow'>
            <h2 className=' text-3xl'>{submission.title}</h2>
            <Link href={submission.url} target='_blank'>
              <h4 className='mt-2 text-xs'>{submission.url}</h4>
            </Link>
          </div>
        </div>
        <div className='ml-2 mt-2'>
          <h6>slug</h6>
          <h4 className=' text-base'>{submission.slug}</h4>
          <h6>leírás</h6>
          <p className='text-base'>{submission.description}</p>
          <h6>kulcsszavak</h6>
          {submission.keywords.map((keyword: string, _index) => (
            <div
              key={_index}
              className={'m-1 inline-block w-fit rounded bg-gray-100 px-2 py-1 ease-in-out hover:bg-gray-300 hover:transition hover:duration-100'}
            >
              {keyword}
            </div>
          ))}
          {submission.oldLinkId && (
            <>
              <h6>elavult link Id:</h6>
              <p>{submission.oldLinkId}</p>
            </>
          )}
          {submission.adminComment && submission.adminComment !== '' && (
            <>
              <h6>admin komment</h6>
              <p>{submission.adminComment}</p>
            </>
          )}
        </div>
        {submission.status === 'IN_REVIEW' && (
          <div className='my-4 flex w-full justify-evenly'>
            <Popup
              title='Biztosan el szertnéd utasítani?'
              description='Adj visszajelzést a beadónak'
              onConfirm={(feedback: string) => changeSubmissionStatus(false)}
            >
              <Button variant={'destructive'}>Elutasítás</Button>
            </Popup>
            <Button onClick={() => changeSubmissionStatus(true)}>Jóváhagyás</Button>
          </div>
        )}
      </div>
    </div>
  )
}
