import ListProducts from '@/components/ListProducts'

const variables = {
  page: 1,
  status: 'RELEASING'
}

export default function Home() {
  return (
    <ListProducts variables={variables} />
  )
}
