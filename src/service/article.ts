/**
 * Article
 * @author liuyuan
 * @date 2022-01-08 16:42
 * @since 1.0.0
 */
import { Provide } from '@midwayjs/decorator'
import { Article } from '@/typeorm/entity/article.entity'
import { ObjectLiteral } from 'typeorm'
import * as _ from 'lodash'

@Provide()
export class ArticleService {
    /**
     * 获取所有的文章数据
     */
    async getAllArticle() {
        const article = Article.find()

        return article
    }

    /**
     * 添加文章
     */
    async saveArticle(input: API.ArticleInput) {
        const article = new Article()

        article.title = input.title
        article.author = input.author
        article.description = input.description
        article.code = input.code

        article.save()

        return true
    }

    /**
     * 获取文章数据(分页)
     */
    async getArticleList(input: API.ArticleListReq) {
        const { keyword } = input

        const page = Number(input.page)

        const page_size = Number(input.page_size)

        const where: ObjectLiteral = {}

        if (keyword) {
            where.title = {
                $regex: new RegExp(_.escapeRegExp(keyword), 'i')
            }
        }

        const [list, total] = await Article.findAndCount({
            where,
            skip: (page - 1) * page_size,
            take: page_size,
            order: {
                _id: 'DESC'
            }
        })

        return {
            total,
            list: list.map((v) => {
                return {
                    ...v,
                    id: v._id.toHexString()
                }
            }),
            page: input.page,
            page_size: input.page_size
        }
    }
}
