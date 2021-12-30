declare module APIHome {
    export interface HomeServerInputOptions {
        uid: string
    }

    export interface HomeServerResponse {
        uid: string
        username: string
        phone: string
        email: string
    }
}
