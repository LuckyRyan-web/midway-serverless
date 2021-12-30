import { Configuration } from '@midwayjs/decorator'
import { ILifeCycle } from '@midwayjs/core'
import { join } from 'path'
import 'tsconfig-paths/register'

@Configuration({
    importConfigs: [join(__dirname, './config/')],
    conflictCheck: true
})
export class ContainerLifeCycle implements ILifeCycle {
    async onReady() {}
}
