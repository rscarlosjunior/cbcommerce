import {
  GetPrismicByQuery,
  GetPrismicByQueryResponse
} from '@/types/IProduct.interface'
import Prismic from '@prismicio/client'

export const usePrismicService = () => {
  const getPrismicClient = (req?: unknown) => {
    const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    })
    return prismic
  }
  const getPrismicByQuery: GetPrismicByQuery = async () => {
    const service = getPrismicClient()
    const result = (await service.query([
      Prismic.predicates.at('document.type', 'products')
    ])) as unknown as GetPrismicByQueryResponse
    return result
  }

  return {
    getPrismicClient,
    getPrismicByQuery
  }
}
