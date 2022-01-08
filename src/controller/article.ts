/**
 * Article
 * @author liuyuan
 * @date 2022-01-08 16:47
 * @since 1.0.0
 */
import {
    Provide,
    Inject,
    Controller,
    Get,
    Post,
    Body,
    ALL
} from '@midwayjs/decorator'
import { Context } from '@midwayjs/faas'
import { ArticleService } from '@/service/article'
import { transformHtml2Markdown } from '@ryan-liu/wechat-to-markdown'

@Provide()
@Controller('/article', {
    description: 'Article',
    middleware: []
})
export class ApiArticleController {
    @Inject()
    ctx: Context

    @Inject()
    articleServer: ArticleService

    @Get('/all', {
        description: '获取所有的文章数据'
    })
    async Index() {
        const data = await this.articleServer.getAllArticle()

        return {
            code: 200,
            data
        }
    }

    @Post('/add', {
        description: '添加文章数据'
    })
    async addArticle(@Body(ALL) input: API.ArticleReq) {
        if (!input.url) {
            this.ctx.throw(401, '缺少参数')
        }

        const allowPath = ['https://mp.weixin.qq.com']

        const isAllow = allowPath.some((v) => input.url.startsWith(v))

        if (!isAllow) {
            this.ctx.throw(401, '该 url 不在规定请求地址内')
        }

        const { title, author, content } = await transformHtml2Markdown(
            input.url
        )

        const res = await this.articleServer.saveArticle({
            title: input.title || title,
            author,
            description: input.description,
            code: content
        })

        return res
    }
}
