declare module MidwayConfig {
    import { Connection } from 'typeorm'

    interface Config {
        typeorm: Connection
    }
}
