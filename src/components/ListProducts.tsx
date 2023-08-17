import React from "react";
import ProductContainer from "./ProductContainer";

type Props = {}
type ProductData = {
  data: {
    Page: {
      pageInfo: any,
      media:
      [
        {
          id: number,
          title: {
            romaji: string
          },
          coverImage: {
            medium: string
          }
        }
      ]
    }
  }
}

const fetchList = async () => {
  const query = `
    query {
      Page (page: 1 perPage: 30) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (type: ANIME, sort: TRENDING_DESC, status: RELEASING) {
          id
          title {
            romaji
          }
          coverImage {
            medium
          }
        }
      }
    }  
  `
  // let variables = {
  //   search: "Fate/Zero",
  //   page: 1,
  //   perPage: 3
  // }

  const url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        // variables: variables
      })
    }

  const res = await fetch(url, options)
  const data = await res.json()
  return data
}

export default async function ListProducts({ }: Props) {
  const data: ProductData = await fetchList()
  const productList = data.data.Page.media

  return (
    productList.map(async (item) => {
      return (
        <ProductContainer
          img={item.coverImage.medium}
          title={item.title.romaji}
          price={`${item.id}`}
          key={item.id}
        />
      )
    })
  )
}
