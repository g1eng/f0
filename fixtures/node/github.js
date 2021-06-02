const {F0} = require("../../dist/node-f0")

let con = new F0()
con.setHost("https://api.github.com")
con.setHeader("Accept","application/vnd.github.v3+json")
const repo = con.get("/users/g1eng/repos").json().then((e)=>{
    console.log(e, "this json body is assigning into the const repo!")
    return e
})
setTimeout(()=>{
    console.log("now repo is ", repo)
},1500)