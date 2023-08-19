'use client'
import React from "react";
import ProductContainer from "./ProductContainer";

type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  hasNextPage: true,
  perPage: number,
}
type ProductList =
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
type Props = {
  pageInfo: PageInfo, productList: ProductList
}

export default function ListProductsClient({ productList }: Props) {
  return (
    <div className="flex flex-wrap">
      {productList.map((item) => {
        const product_id = item.id
        const img = item.coverImage.large
        const title = item.title.english || item.title.romaji
        return (
          <ProductContainer
            key={item.id}
            product_id={product_id}
            img={img}
            title={title}
          />
        )
      })}
    </div>
  )
}
