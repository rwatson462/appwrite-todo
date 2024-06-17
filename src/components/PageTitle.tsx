export function PageTitle({title, subtitle}: { title: string, subtitle?: string }) {
  return (
    <section>
      <h1 className={'text-4xl font-bold'}>{ title }</h1>
      <h6 className={'text-gray-600'}>{ subtitle }</h6>
    </section>
  )
}