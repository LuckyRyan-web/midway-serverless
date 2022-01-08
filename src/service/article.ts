/**
 * Article
 * @author liuyuan
 * @date 2022-01-08 16:42
 * @since 1.0.0
 */
import { Provide } from '@midwayjs/decorator'
import { Article } from '@/typeorm/entity/article.entity'

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
    async saveArticle(options: API.ArticleInput) {
        const article = new Article()

        article.title = options.title
        article.author = options.author
        article.description = options.description
        article.code = options.code

        article.save()

        return true
    }
}
