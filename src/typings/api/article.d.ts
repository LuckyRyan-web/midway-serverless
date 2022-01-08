declare module API {
    interface ArticleReq {
        title?: string
        url: string
        description: string
    }

    interface ArticleInput {
        title: string
        author: string
        description: string
        code: string
    }
}
