import React from 'react'
import { IProduct } from '@/types/IProduct.interface'
import Rating from '@mui/material/Rating'

import {
  Dwrapper,
  Pwrapper,
  ProductName,
  ProductPrice,
  ProductParcelPrice,
  ProductSalePrice,
  Bbuton,
  Box
} from './styles'
import { RichText } from 'prismic-dom'

export const ProductBox = ({ ...item }: IProduct) => {
  return (
    <Pwrapper>
      <img src={item.data.img.url} alt={item.data.name} />
      <Dwrapper>
        <Box>
          <ProductName>{RichText.asText(item.data.name)}</ProductName>
          <Rating name="read-only" value={item.data.stars} readOnly />
        </Box>
        {item.data.promotionPrice ? (
          <>
            <ProductSalePrice>de R${item.data.price}</ProductSalePrice>
            <ProductPrice>por R${item.data.promotionPrice}</ProductPrice>
          </>
        ) : (
          <ProductPrice>por R${item.data.price}</ProductPrice>
        )}
        {item.data.parcel && (
          <ProductParcelPrice>
            ou em {item.data.parcel}x de R${item.data.splitedPrice}
          </ProductParcelPrice>
        )}
        {item.data.avaible && <Bbuton>Comprar</Bbuton>}
      </Dwrapper>
    </Pwrapper>
  )
}
