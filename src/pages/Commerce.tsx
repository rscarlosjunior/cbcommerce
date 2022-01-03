import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header';
import { useFilter } from '@/hooks/FilterProducts';
import { ProductBoxContainer, Container, Template, BannerImage } from '@/styles/styles'
import { usePrismicService } from '@/services/prismic';
import { IProduct } from '@/types/IProduct.interface';
import { ProductBox } from '@/components/ProductBox';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
interface CommerceProps {
    value?: string,
    formatted?: object
}

export const Commerce: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>()
    const [backlogProductList, setBacklogProductList] = useState<IProduct[]>()
    const { productFilter } = useFilter()
    const { getPrismicByQuery }  = usePrismicService()
    const xs = useMediaQuery('(max-width:797px)');

    useEffect(() => {
        handlePrismicByQuery()
    },[])
    
    const handlePrismicByQuery = async () => {
       const data = await getPrismicByQuery()
        setProducts(data.results)
        setBacklogProductList(data.results)
    }

    const handleProductFilter = ({value}:CommerceProps) => {
        if(!products) return
        if(!value) return setProducts(backlogProductList)
        console.log(products)
        const filter = productFilter(products, value)
        setProducts(filter) //todo: check string removal and update listing
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
            </Container>
            {!xs && ( <BannerImage src="https://i.imgur.com/PIDL1qz.png" alt="criar ou migrar seu e-commerce?"/>)}
            {xs && ( <BannerImage src="https://i.imgur.com/nYcU6ro.jpg" alt="criar ou migrar seu e-commerce?"/>)}
            <Container>
                {memoizedProducts}
            </Container>
            <Newsletter/>
            <Footer/>
        </Template>
        </>
    )
}