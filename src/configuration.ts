import { App, Configuration } from '@midwayjs/decorator'
import { ILifeCycle } from '@midwayjs/core'
import { join } from 'path'
import 'tsconfig-paths/register'
import typeorm from '@/plugins/typeorm'
import { Application } from 'midway'
import * as dotenv from 'dotenv'

dotenv.config()
@Configuration({
    importConfigs: [join(__dirname, './config')],
    conflictCheck: true
})
export class ContainerLifeCycle implements ILifeCycle {
    @App()
    app: Application

    async onReady() {
        // console.log('app', this.app.getEnv())
        const config = this.app.getConfig()
        await typeorm(config)
    }
}
