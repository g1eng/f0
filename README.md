# Tiny and Simple HTTP client using fetch

****

**F0** is a tiny library to make http request, get response and hold the response object for in a instance.
It uses fetch API for any requests and written in TypeScript.

You can generate a F0 instance and hold any of Premises, results and result json inside it.

```javascript
//make a connection
let con = new F0({
    hostname: "https://api.example.com",
})
const response = con.get("/category/list").json()
console.log(response)
// { some:json, like:this}
console.log(con.jsonBody)
// { some:json, like:this}
```

# Basic usage

make a new connection and get a json response

```javascript
const {F0} = require("../../dist/node-f0")

let con = new F0()
con.setHost("https://api.github.com")
con.setHeader("Accept","application/vnd.github.v3+json")
const repo = con.get("/users/g1eng/repos").json().then((e)=>{
    console.log(e, "this json body is assigning into the const repo!")
    return e
})
```

send a post request and get a raw response object

```javascript
con.setHost("https://httpbin.org")
con.setBody("thisisok")
let res = con.post("/post").res().then((e)=>{
    console.log(e)
})
```

make connection pool with pre-defined config and send request for each

```javascript
let configList = [];
const config0 = {
    hostname: "awesome.api.example.com",
    options: {
        mode: "cors",
        headers: {
            cache: "no-cache",
            'Content-Type': "application/javascript",
            'X-CSRF-TOKEN': "hoge"
        }
    }
}
for (let i in awesomeResourceList) {
    configList.push(config0)
    configList[i].resource = awesomeResourceList[i]
}

function sendRequestRecursive(seq){
    setTimeout(()=>{
        let f = new F0(configList[seq++])
        f.get()
        if (seq < configList.length)
            sendRequest(seq)
    },1000)
}
```


# Author

Nomura Suzume ([@g1eng](https://github.com/g1eng))
