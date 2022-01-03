import { IProduct } from "@/types/IProduct.interface";
import { RichText } from "prismic-dom";

export const useFilter = () => {
    const productFilter = (productList:IProduct[], query:string) => {
        if (!query) {
            return productList;
        }
    
        return productList.filter((product) => {
            const productName = RichText.asText(product.data.name).toLowerCase();
            return productName.includes(query);
        });
    }
    return {
        productFilter
    }
};