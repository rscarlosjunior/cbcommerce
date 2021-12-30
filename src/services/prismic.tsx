import Prismic from '@prismicio/client'

export const usePrismicService = () => {
    const getPrismicClient = (req?: unknown) => {
        const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
            req,
            accessToken:process.env.PRISMIC_ACCESS_TOKEN
        })
        return prismic
    }
    const getPrismicByQuery =  async () => {
        const service = getPrismicClient()
        let query =  await service.query([Prismic.predicates.at('document.type', 'products')])
        return query
    }

    return {
        getPrismicClient,
        getPrismicByQuery
    }
}