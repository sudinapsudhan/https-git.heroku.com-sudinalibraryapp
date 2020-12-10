const express = require('express');
const booksRouter = express.Router();
function router(nav){
var books =[
    {
    title: 'KAALAM',
    author:'M.T.VASUDEVAN NAIR',
    genre:'NOVEL',
    img: "kaalam.jpg"
},
{
    title: 'WAR AND PEACE',
    author:'LEO TOLSTOY',
    genre:'NOVEL',
    img:"war.jpg"
},
{
    title: 'TOM AND JERRY',
    author:'Joseph Barbera',
    genre:'cartoon',
    img:"TOM.jpg"
}
]

booksRouter.get('/',function(req,res){
    res.render("books",{
        // nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
        nav,
        title:'Library' ,
        books
    });
});
// booksRouter.get('/single',function(req,res){
// res.send("hello");
// });
booksRouter.get('/:id', function(req,res){
   const id = req.params.id
    res.render('book',{
        // nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
        nav,
        title:'Library',  
        book: books[id]
    });
});
return booksRouter;
}

module.exports = router;