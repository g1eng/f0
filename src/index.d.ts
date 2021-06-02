export default F0;

export namespace F0 {
    export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'
    export interface F0Config {
        hostname: string
        resource: string
        options: FetchOption
    }
    export interface FetchOption {
        init?: any
        mode?: 'cors' | 'no-cors' | 'same-origin'
        headers: {
            cache: string
            'Content-Type': string
            [k: string]: string
        },
        method: HttpMethod
        body?: any
        credentials?: any
        referrer?: string
        referrerPolicy?:  "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
        integrity?: string
        keepalive?: boolean
        signal?: AbortSignal | null | undefined
    }
}

export class F0 {
    config: F0.F0Config
    method: string
    status?: number
    fetch: undefined | Promise<undefined|Response>
    response: undefined | Response
    jsonBody?: object
    constructor(conf: undefined | F0.F0Config)
    genConfig(): F0.F0Config
    genOptions(): F0.FetchOption
    setHost(hostname: string)
    setResource(resource: undefined | string)
    setMethod(method: F0.HttpMethod): void
    setBody(body?: any): void
    flush(): void
    get(resource: undefined | string): this
    post(resource: undefined | string): this
    put(resource: undefined | string): this
    delete(resource: undefined | string): this
    delete(resource: undefined | string): this
    patch(resource: undefined | string): this
    options(resource: undefined | string): this
    makeRequest(): this
    resolve(): this
    res(): undefined | object
    json(): undefined | object
    hasStatus(code: number): boolean
}