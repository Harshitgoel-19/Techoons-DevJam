const express=require('express');
const app=express();
const port=5000;

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/Images'))

app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/lucknow.ejs',(req,res)=>{
    res.render('lucknow')
})
app.get('/varanasi.ejs',(req,res)=>{
    res.render('varanasi')
})
app.get('/prayagraj.ejs',(req,res)=>{
    res.render('prayagraj')
})
app.get('/ayodhya.ejs',(req,res)=>{
    res.render('ayodhya')
})
app.get('/noida.ejs',(req,res)=>{
    res.render('noida')
})


app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
})