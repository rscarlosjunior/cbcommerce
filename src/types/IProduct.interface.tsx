import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";

export interface IProduct {
  uid: number
  data: {
    name: string
    img: {
      url?: string
    }
    stars?: number
    price: number
    promotionPrice?: number
    parcel?: number
    splitedPrice?: number
    avaible: boolean
  }
}

export interface GetPrismicByQueryResponse extends Omit<ApiSearchResponse,"results"> {
  results: IProduct[]
}

export type GetPrismicByQuery = () => Promise<GetPrismicByQueryResponse>