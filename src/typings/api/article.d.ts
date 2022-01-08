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

    interface ReqPageListBase {
        page: number
        page_size: number
    }

    interface ArticleListReq extends ReqPageListBase {
        keyword?: string
    }
}
