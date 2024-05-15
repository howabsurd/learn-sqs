const express = require("express")

// middleware 
const app = express();


app.listen(3000, ()=>{
    console.log(`App is listening over port 3000`)
})