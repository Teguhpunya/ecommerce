import fetchData from "@/components/fetch-list";
import ProductDetail from "./ProductDetail";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type Params = { id: number }
type ProductDetail = {
  data: {
    Media: {
      id: number,
      title: {
        romaji: string,
        english: string
      },
      coverImage: {
        large: string
      }
      description: string
    }
  }
}

const query = `
  query ($prod_id: Int) {
    Media (id: $prod_id) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      description
    }
  }  
`

export default async function Page({ params: { id } }: { params: Params }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  const variables: { prod_id: number } = {
    prod_id: id
  }
  const { data: { Media: media } }: ProductDetail = await fetchData(query, variables)

  return <ProductDetail media={media} session={session} />
}