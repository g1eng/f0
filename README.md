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

# Usage

ToDo

# Author

Nomura Suzume ([@g1eng](https://github.com/g1eng))
