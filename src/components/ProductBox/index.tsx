import React, { useState } from 'react'
import { IProduct } from '@/types/IProduct.interface'
import Rating from '@mui/material/Rating'

import {
  Dwrapper,
  Pwrapper,
  ProductName,
  ProductPrice,
  ProductParcelPrice,
  ProductSalePrice,
  Box
} from './styles'
import { RichText } from 'prismic-dom'
import LoadingButton from '@mui/lab/LoadingButton'

export const ProductBox = ({ ...item }: IProduct) => {
  const [loading, setLoading] = useState(false)

  const addToCart = () => {
    //todo: change add to cart to redux.
    setLoading(true)
    const total = localStorage.getItem('cart')
    if (!total) {
      localStorage.setItem('cart', JSON.stringify(1))
      return window.location.reload()
    }
    const items = parseFloat(total)
    setTimeout(() => {
      setLoading(false)
      localStorage.setItem('cart', JSON.stringify(items + 1))
      window.location.reload()
    }, 2000)
  }

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
        {item.data.avaible && (
          <LoadingButton
            onClick={addToCart}
            disabled={loading}
            loading={loading}
            variant="contained"
            style={{
              backgroundColor: !loading ? '#000000' : '',
              color: 'white',
              width: '100%',
              flexDirection: 'row',
              height: '48px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 700,
              borderRadius: '5px'
            }}
          >
            {!loading && 'Comprar'}
          </LoadingButton>
        )}
      </Dwrapper>
    </Pwrapper>
  )
}
