const {F0} = require('../dist/node-f0')

const testbin = "https://89e20210fd4c5440daf166b2d1c2bcc5.m.pipedream.net"

describe('F0', ()=>{
    beforeEach(()=>{
        f = new F0()
        f.setHost(testbin)
    })

    test('setHost set a host', ()=>{
        expect(f.config.hostname).toBe(testbin)
    })

    describe('get', () => {

        it('sets method get', ()=>{
            f.get("/get")
            expect(f.method).toStrictEqual('GET')
        })

        it('sets a promise', ()=>{
            expect(f.get("/get").fetch).toEqual(expect.anything())
        })

        it('sets a promise and the promise resolved as true', ()=>{
            expect(f.get("/get").fetch).resolves.toBe(true)
        })

        it('resolves response as a Response', ()=>{
            expect(f.get("/get").res()).resolves.toBe(
                expect.objectContaining({
                    status: expect.any(Number),
                    ok: expect.any(Boolean)
                })
            )
        })

        it('resolves response json as a object', ()=>{
            expect(f.get("/get").json()).resolves.toStrictEqual(
                expect.any(Object)
            )
        })

        it('resolves status code as a number', ()=>{
            expect(f.get("/get").status()).resolves.toStrictEqual(
                expect.any(Number)
            )
        })
    });

    describe('post', ()=>{
        const bodyMsg = "this is body"

        it('sets method post', ()=>{
            f.post("/post")
            expect(f.method).toStrictEqual('POST')
        })

        it('sets request body for testbin', ()=>{
            expect(f.post("/post", bodyMsg).config.options.body).toStrictEqual(
                bodyMsg
            )
        })
        it('resolves response as a Response', ()=>{
            expect(f.post("/post").res()).resolves.toBe(
                expect.objectContaining({
                    status: expect.any(Number),
                    ok: expect.any(Boolean)
                })
            )
        })
        it('resolves response json as a object', ()=>{
            expect(f.post("/post").json()).resolves.toStrictEqual(
                expect.any(Object)
            )
        })
        it('resolves response json containing a body from testbin', ()=>{
            expect(f.post("/post",bodyMsg).json()).resolves.toStrictEqual(
                expect.objectContaining({
                    body: bodyMsg
                })
            )
        })
    })

    describe('put', ()=>{
        const bodyMsg = "this is body"

        it('sets method put', ()=>{
            f.put("/put")
            expect(f.method).toStrictEqual('PUT')
        })

        it('sets request body for testbin', ()=>{
            expect(f.put("/put", bodyMsg).config.options.body).toStrictEqual(
                bodyMsg
            )
        })
        it('resolves response as a Response', ()=>{
            expect(f.put("/put").res()).resolves.toBe(
                expect.objectContaining({
                    status: expect.any(Number),
                    ok: expect.any(Boolean)
                })
            )
        })
        it('resolves response json as a object', ()=>{
            expect(f.put("/put").json()).resolves.toStrictEqual(
                expect.any(Object)
            )
        })
        it('resolves response json containing a body from testbin', ()=>{
            expect(f.put("/put",bodyMsg).json()).resolves.toStrictEqual(
                expect.objectContaining({
                    body: bodyMsg
                })
            )
        })
    })

    describe('delete', ()=>{
        it('sets method delete', ()=>{
            f.delete("/delete")
            expect(f.method).toStrictEqual('DELETE')
        })
    })
})
