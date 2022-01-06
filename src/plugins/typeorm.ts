import { createConnection, ConnectionOptions } from 'typeorm'

export default async (app: MidwayConfig.Config) => {
    const config = app.typeorm as ConnectionOptions & { host: string }

    if (config && config.host) {
        const connection = await createConnection(config)

        app.typeorm = connection
    }

    return app
}
