const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')
const port=process.PORT||8000




const Publicpath=path.join(__dirname,"/public")
app.use(express.static(Publicpath))

app.set('view engine',"hbs")

const temp=path.join(__dirname,"/template/views")
app.set("views",temp)

const PartialPath=path.join(__dirname,"/template/partial")
hbs.registerPartials(PartialPath);

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})


app.listen(port,()=>{
    console.log("connected")
})


