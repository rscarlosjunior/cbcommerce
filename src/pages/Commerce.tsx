import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header';
import { useFilter } from '@/hooks/FilterProducts';
import { ProductBoxContainer, Container, Template } from '@/styles/styles'
import { usePrismicService } from '@/services/prismic';
import { useCleanResponse } from '@/hooks/CleanService';
import { IProduct, IProducts } from '@/types/IProduct.interface';
import { ProductBox } from '@/components/ProductBox';

interface CommerceProps {
    value?: string,
    formatted?: object

}
export const Commerce: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>()
    const [productsList, setProductsList] = useState<IProducts[]>()
    const { productFilter } = useFilter()
    const { formatterResponse } = useCleanResponse()
    const { getPrismicByQuery }  = usePrismicService()

    useEffect(() => {
        getPrismicByQuery().then(data => handlePrismicResponse(data))
    },[])

    const handlePrismicResponse = (product:IProducts) => {
        formatterResponse(product).then(payload => setProductsList(payload))
    }

    const handleProductFilter = ({value}:CommerceProps) => {
        const filter = productFilter(productsList, value)
        setProducts(filter)
    }
    
    const memoizedProducts = useMemo(() => {
        if(!products) return null
        return (
            <ProductBoxContainer>
                {products.map((item) => 
                    <ProductBox key={item.uid} {...item}/>
                )}
            </ProductBoxContainer>
        )
    },[products])

    return (
        <>
        <Template>
            <Container>
                <Header handleProductFilter={(value) => handleProductFilter({value})} />
                {memoizedProducts}
            </Container>
        </Template>
        </>
    )
}