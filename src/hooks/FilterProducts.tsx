export const useFilter = () => {
    const productFilter = (productList:[], query:string) => {
        if (!query) {
            return productList;
        }
    
        return productList.filter((productList: { name: string; }) => {
            const postName = productList.name.toLowerCase();
            return postName.includes(query);
        });
    }
    return {
        productFilter
    }
};