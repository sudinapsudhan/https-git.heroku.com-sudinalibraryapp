const express = require('express');
const app = express();
const port = process.env.PORT || 3008;
const nav = [
    {link:'/books',name:'Books'}, 
    {link:'/authors',name:'Authors'},
{
    link:'/signin',name:'sign In'},
{
    link:'/signup',name:'Sign Up'},
{
    link:'/addbook ',name:'Add Book'},
{
    link:'/addauthor ',name:'Add Author'
}
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);
const addauthor = require('./src/routes/addauthor')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addRouter);
app.use('/addauthor',addauthor);

app.get('/',function(req,res){
     res.render("index",
    {
      
       nav,
        title:'Library',
    });
});
app.get('/signin',function(req,res){
    res.render("signin",{
        nav:[{link:'/signin',name:'sign In'}],
           title:'Library'
    });
});
app.get('/signup',function(req,res){
    res.render("signup",{
        nav:[{link:'/signup',name:'sign up'}],
           title:'Library'
    });
});
app.listen(port,()=>{console.log("server ready at"+ port)});