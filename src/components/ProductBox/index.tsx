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
import { useCart } from '@/hooks/useCart'

export const ProductBox = ({ ...item }: IProduct) => {
  const [loading, setLoading] = useState(false)
  const { updateValue } = useCart()

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
            onClick={updateValue}
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
