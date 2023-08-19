import ListProducts from '@/components/ListProducts'

export default function Page({ params, searchParams }: { params: { number: string }, searchParams: { title: string, status: string } }) {
  const variables: any = {
    page: params.number
  }

  if (searchParams.title) {
    variables.search = decodeURIComponent(searchParams.title)
  }
  if (searchParams.status) {
    variables.status = decodeURIComponent(searchParams.status)
  }

  return (
    <ListProducts variables={variables} />
  )
}