import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";

export interface IProduct {
  data: object,
  uid: number
  url?: string
  name: string
  stars?: number
  price: number
  promotionPrice?: number
  parcel?: number
  splitedPrice?: number
  available: boolean
}

export interface IProducts {
  [x: string]: any;
  products: IProduct[],
  api?: ApiSearchResponse
}