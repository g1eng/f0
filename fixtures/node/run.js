const {F0} = require("../../dist/node-f0")

let f = new F0()

f.setHost("http://htb.testing.local")
f.get("/get").hasStatus(200).then(()=>{
    console.log("status 200 ok")
})

