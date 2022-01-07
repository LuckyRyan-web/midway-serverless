import { EggAppInfo, PowerPartial, EggAppConfig } from 'midway'
import { join } from 'path'

// export const customKey = 'hello'

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
    const config = {} as DefaultConfig

    config.typeorm = {
        type: 'mongodb',
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        database: process.env.MONGODB_DATABASE,
        username: process.env.MONGODB_NAME,
        password: process.env.MONGODB_PWD,
        entities: [join(appInfo.baseDir, 'typeorm/entity/*{.ts,.js}')],
        synchronize: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        logging: true
    }

    return config
}
