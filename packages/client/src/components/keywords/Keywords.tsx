export default function Keywords({ keywords }: { keywords: string[] }) {
  return (
    <>
      {keywords.map((keyword: string, _index) => (
        <div
          key={_index}
          className={'m-1 inline-block w-fit rounded bg-gray-100 px-2 py-1 ease-in-out hover:bg-gray-300 hover:transition hover:duration-100'}
        >
          {keyword}
        </div>
      ))}
    </>
  )
}
