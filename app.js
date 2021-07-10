const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.json(200).json({message: "great to see you here"})
})

app.get('/sad', (req, res)=>{
    res.json(200).json({message: "sad to see you here"})
})
app.listen(PORT, ()=>{
    console.log("listenig to port")
})