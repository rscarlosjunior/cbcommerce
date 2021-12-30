import React from 'react'
import { IProduct } from '@/types/IProduct.interface'
import Rating from '@mui/material/Rating';

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

export const ProductBox = ({
    ...item
}: IProduct) => {
    return (
        <Pwrapper>
            <img src={item.url} alt={item.name}/>
            <Dwrapper>
                <Box>
                    <ProductName>
                        {item.name}
                    </ProductName>
                    <Rating name="read-only" value={item.stars} readOnly />
                </Box>
                {item.promotionPrice ? (
                    <>
                        <ProductSalePrice>
                            de R${item.price}
                        </ProductSalePrice>
                        <ProductPrice>
                            por R${item.promotionPrice}
                        </ProductPrice>
                    </>

                ):(
                    <ProductPrice>
                        por R${item.price}
                    </ProductPrice>
                )}
                {item.parcel && (
                    <ProductParcelPrice>
                        ou em {item.parcel}x de R${item.splitedPrice}
                    </ProductParcelPrice>
                )}
                {item.available && (
                    <Bbuton>Comprar</Bbuton>
                )}
            </Dwrapper>
        </Pwrapper>
    )
}