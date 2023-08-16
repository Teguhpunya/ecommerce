import React from 'react'
import ProductContainer from './ProductContainer'

type Props = {}

const dummies = () => {
  let result = []
  for (let index = 0; index < 10; index++) {
    const prop = {
      id: index,
      img: '/testpic.png',
      title: `title${index + 1}`,
      price: `200${index}`
    }

    result.push(prop)
  }
  return result
}


export default function ListProducts({ }: Props) {
  const productList = dummies()

  return (
    productList.map((item) => (
      <ProductContainer
        img={item.img}
        title={item.title}
        price={item.price}
        key={item.id}
      />
    ))
  )
}
