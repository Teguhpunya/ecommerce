import ListProducts from '@/components/ListProducts'

export default function Search({ searchParams }: { searchParams: { title: string, status: string } }) {
  let variables: any = {}

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