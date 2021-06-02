'use strict';
// @ts-ignore
const fetch = require('node-fetch')

interface F0Config {
    hostname: string
    resource: string
    options: FetchOption
}
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'
interface FetchOption {
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

class F0 {
    config: F0Config
    method: string
    fetch: undefined | Promise<undefined|Response>
    response: undefined | Response
    jsonBody?: object
    constructor(conf: undefined | F0Config) {
        if (conf !== undefined){
            if (conf.options === undefined)
                conf.options = this.genOptions()
            this.config = conf
        } else {
            this.config = this.genConfig()
        }
        this.method = this.config.options.method
    }
    /**
     * Generate and return default configuration template
     * @this F0
     * @return {F0Config} config template object
     */
    genConfig(): F0Config {
        return {
            hostname: "http://localhost",
            resource: "/",
            options: this.genOptions()
        }
    }

    /**
     * Generate and return fetch option template with
     * a default custom header.
     * @this F0
     * @return {FetchOption} option template object
     */
    genOptions(): FetchOption {
        return {
            method: 'GET',
            headers: {
                cache: 'no-cache',
                'Content-Type': 'application/json',
                'X-Requested-With': 'Fetch'
            },
        }
    }

    /**
     * Set hostname to fetch
     * @this F0
     * @param {String} hostname hostname to send a request (e.g. http://example.com:8080)
     */
    setHost(hostname: string){
        this.config.hostname = hostname
    }

    /**
     * Set resource to fetch
     * @this F0
     * @param {undefined|String} resource path to access (e.g. /api/resource )
     */
    setResource(resource: undefined | string){
        if (typeof resource === "undefined"){
            this.config.resource = "/"
        } else {
            this.config.resource = resource
        }
    }

    /**
     * Set method for the request
     * @param {String} method GET, POST, PUT, DELETE, PATCH or OPTIONS
     */
    setMethod(method: HttpMethod): void {
        this.config.options.method = method
        this.method = method
    }

    /**
     * Set body for the request
     * @this F0
     * @param {Object} body request body object or a string
     */
    setBody(body?: any): void{
        if (body !== undefined){
            this.config.options.body = body
        }
    }

    /**
     * Flush any previous request body, premise and past response object
     * @this F0
     */
    flush(): void{
        if (this.config.options.body)
            delete this.config.options.body
        if (this.fetch)
            delete this.fetch
        if (this.response)
            delete this.response
        if (this.jsonBody)
            delete this.jsonBody
    }

    /**
     * make GET request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @return {this} this for method chaining
     */
    get(resource: undefined | string): this{
        this.flush()
        this.setResource(resource)
        this.setMethod('GET')
        return this.makeRequest()
    }

    /**
     * make POST request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @param {Object|String} body object or string which is sent within the request
     * @return {this} this for method chaining
     */
    post(resource: undefined | string, body?: any): this{
        this.flush()
        this.setResource(resource)
        this.setBody(body)
        this.setMethod('POST')
        return this.makeRequest()
    }

    /**
     * make PUT request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @param {Object|String} body object or string which is sent within the request
     * @return {this} this for method chaining
     */
    put(resource: undefined | string, body?: any): this{
        this.flush()
        this.setResource(resource)
        this.setBody(body)
        this.setMethod('PUT')
        return this.makeRequest()
    }

    /**
     * make DELETE request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @return {this} this for method chaining
     */
    delete(resource: undefined | string): this{
        this.flush()
        this.setResource(resource)
        this.setMethod('DELETE')
        return this.makeRequest()
    }

    /**
     * make PATCH request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @param {Object|String} body object or string which is sent within the request
     * @return {this} this for method chaining
     */
    patch(resource: undefined | string, body?: any): this{
        this.flush()
        this.setResource(resource)
        this.setBody(body)
        this.setMethod('PATCH')
        return this.makeRequest()
    }

    /**
     * make OPTIONS request with preset host and resources
     * @this F0
     * @param {String} resource string to send the request
     * @return {this} this for method chaining
     */
    options(resource: undefined | string): this{
        this.flush()
        this.setMethod('OPTIONS')
        return this.makeRequest()
    }

    /**
     * Make a request with preset config
     * @this F0
     */
    makeRequest(): this{
        this.fetch = fetch(
            this.config.hostname + this.config.resource,
            this.config.options
        )
        return this.resolve()
    }

    /**
     * Sends a request and resolves the promise on this.fetch. This method promises to assign the response in this.response
     * @this F0
     * @return this this for method chaining
     */
    resolve(): this{
        this.fetch = this.fetch?.then(
            e => {
                this.response = e
                return this.response
            }
        ).catch(
            ()=>this.response = undefined
        )
        return this
    }

    /**
     * Similar to resolve(), but does not send request and returns response object promise
     * @this F0
     * @return {Promise<object>} a promise which is resolved to response raw object
     */
    res(): undefined | Promise<undefined|object> {
        return this.fetch?.then(
            () => this.response
        ).catch(
            e=> e
        )
    }

    /**
     * Get a response json and assign it to this.jsonBody
     * @this F0
     * @return {Promise<Object>} a promise which is resolved to response json body
     */
    json(): undefined | Promise<undefined|object> {
        return this.fetch?.then(
            e=> {
                return e?.json()
            }
        ).then(
            e => this.jsonBody = e
        ).then(
            () => this.jsonBody
        ).catch(
            () => undefined
        )
    }

    /**
     * Return a promise to resolve a status code
     * @this F0
     * @return {Promise<Number>}
     */
    status(): undefined | Promise<undefined|Number> {
        return this.fetch?.then(
            () => this.response?.status
        ).catch(
            () => undefined
        )
    }

    /**
     * Matches status for a response and returns Promise to resolve a boolean
     * @this F0
     * @param code status code corresponding to the response
     * @return {Promise<Boolean>}
     */
    hasStatus(code: number): undefined | Promise<Boolean>{
        return this.fetch?.then(() => {
            if (this.response?.status !== code) throw new Error("")
            return true
        })
    }

    /**
     * @this F0
     * Returns true when the status code is 200 ok
     */
    ok(): boolean{
        if (this.response === undefined)
            return false
        return this.response.ok
    }
}

module.exports = F0