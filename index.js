const express=require("express")
const port=5000
const app=express()
const path=require("path")
const spamDetection=require("./spamDetection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile("index.html")
})


app.post("/spam-check",(req,res)=>{
    const {text}=req.body
    const isSpam=spamDetection(text)
    res.send({isSpam})
})


app.use((req,res)=>{
    res.send("404- page not found")
})

app.listen(port,()=>{
    console.log("Api is running in port "+port)
})