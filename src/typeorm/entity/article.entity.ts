import { BaseEntity, Entity, Column, ObjectIdColumn } from 'typeorm'
import { ObjectId } from 'mongodb'

@Entity()
export class Article extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId

    @Column({
        comment: '文章标题'
    })
    title: string

    @Column({
        comment: '作者'
    })
    author: string

    @Column({
        comment: '文章描述'
    })
    description: string

    @Column({
        comment: 'markdown 形式的 blog'
    })
    code: string
}
