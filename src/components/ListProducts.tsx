import React from "react";
import fetchData from "./fetch-list";
import ListProductsClient from "./ListProductsClient";
import SearchForm from "./SearchForm";
import PageButtons from "./PageButtons";

type Props = {
  variables: any
}
type ProductData = {
  data: {
    Page: {
      pageInfo: {
        total: number,
        currentPage: number,
        lastPage: number,
        hasNextPage: true,
        perPage: number,
      },
      media:
      [
        {
          id: number,
          title: {
            romaji: string,
            english: string
          },
          coverImage: {
            large: string
          }
        }
      ]
    }
  }
}

const query = `
  query ($search: String, $status: MediaStatus, $page: Int) {
    Page (page: $page perPage: 25) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search: $search, type: ANIME, sort: TRENDING_DESC, status: $status, duration_greater: 10, isAdult: false) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }  
`


export default async function ListProducts({ variables }: Props) {
  const { data }: ProductData = await fetchData(query, variables)
  const pageInfo = data.Page.pageInfo
  const productList = data.Page.media

  return (
    <>
      <SearchForm />
      <h1>Status airing: {variables.status}</h1>
      <ListProductsClient pageInfo={pageInfo} productList={productList} />
      <PageButtons pageInfo={pageInfo} variables={variables} />
    </>
  )
}
