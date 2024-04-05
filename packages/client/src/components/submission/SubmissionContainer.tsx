import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Submission } from '@/types/submission.type'

export default function SubmissionContainer({ submission }: { submission: Submission }) {
  /*  const approveSubmission = async () => {
    const res = authorizedApi(`/submissions/${submission.id}/approve.ts`)
    router.reload()
  }*/
  const getStatusColor = (status: Submission['status']) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-200'
      case 'DECLINED':
        return 'bg-red-200'
      case 'IN_REVIEW':
        return 'bg-amber-200'
    }
  }

  return (
    <div className='flex-no-wrap bg-blue flex w-96 flex-col items-center overflow-ellipsis rounded-xl p-2'>
      <div className='-z-1  ${getStatusColor(submission.status)} -mb-3 flex h-10 w-full flex-row items-center rounded-t-xl p-2'>
        <h4 className='w-full text-center'>{submission.id}</h4>
      </div>
      <div className='h-35 relative w-full overflow-hidden rounded-xl bg-white p-2'>
        <div className=' flex flex-grow flex-row'>
          <img
            className={cn('ml-0 aspect-square flex-none', submission.iconUrl === null ? 'h-8 w-8' : 'h-1/6 w-1/6')}
            src={
              submission.iconUrl === null
                ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${submission.url.replace(
                    'www.',
                    ''
                  )}&size=128`
                : submission.iconUrl
            }
            alt='ikon'
            width={100}
            height={100}
          />
          <div className='ml-2 h-2/3 flex-grow overflow-hidden'>
            <h2 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl'>{submission.title}</h2>
            <h4 className='text-xs'>{submission.url}</h4>
          </div>
        </div>
        <div className='ml-2'>
          <h6>slug</h6>
          <h4 className='mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>{submission.slug}</h4>
          <h6>desc</h6>
          <p className='mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>{submission.description}</p>
          <h6>keywords</h6>
          {submission.keywords.map((keyword: string, _index) => (
            <div key={_index} className={'m-1 inline-block w-fit rounded bg-gray-100 px-2 py-1'}>
              {keyword}
            </div>
          ))}
          {submission.oldLinkId && (
            <>
              <h6>Old Link Id:</h6>
              <p>{submission.oldLinkId}</p>
            </>
          )}
          <hr></hr>
          {submission.adminComment && submission.adminComment !== '' && (
            <>
              <h6>admin comment</h6>
              <p>{submission.adminComment}</p>
            </>
          )}
        </div>
        <div className='my-4 flex w-full justify-evenly'>
          <Button variant={'destructive'}>Elutasítás</Button>
          <Button>Jóváhagyás</Button>
        </div>
      </div>
    </div>
  )
}
