import { IProducts } from '@/types/IProduct.interface';
import { RichText } from 'prismic-dom'

export const useCleanResponse = () => {
    const formatterResponse = async (response:IProducts) => {
        const results = (await response).results
        let items = results.map(item => {
            return {
                uid:item?.uid,
                url:item.data?.img?.url,
                name: RichText.asText(item.data.name),
                stars: item.data?.stars,
                price: item.data?.price,
                promotionPrice: item.data?.promotionPrice ,
                parcel: item.data?.parcel,
                splitedPrice: item.data?.splitedPrice,
                available: item.data?.avaible
            }
        }
        )
        return items
    }
    return {
        formatterResponse
    }
};