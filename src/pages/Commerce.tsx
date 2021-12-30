import React, { useEffect, useMemo, useState } from 'react'
import { Header } from '@/components/Header';
import { useFilter } from '@/hooks/FilterProducts';
import { Cwrapper } from '@/styles/styles'
import { usePrismicService } from '@/services/prismic';
import { useCleanResponse } from '@/hooks/CleanService';
import { IProduct, IProducts } from '@/types/IProduct.interface';

interface CommerceProps {
    value?: string,
    formatted?: object

}
export const Commerce: React.FC = () => {
    const [products, setProducts] = useState<IProducts>()
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
            <ul>
                {products.map((item: { uid: IProduct["uid"]; name: IProduct["name"]}) => 
                    <li key={item.uid}>{item.name}</li>
                )}
            </ul>
        )
    },[products])

    return (
        <>  
            <Cwrapper>
                <Header handleProductFilter={(value) => handleProductFilter({value})} />
            </Cwrapper>
            {memoizedProducts}
        </>
    )
}