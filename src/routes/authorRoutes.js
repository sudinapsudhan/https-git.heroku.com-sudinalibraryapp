// const express = require('express');

// const authorsRouter = express.Router();
// function router(nav){
// var authors = [
//     {
//     title: 'tom',
//     author: 'naran',
//     genre:'novelist',
//     img:'helo.jpg'
// },
// {
//     title: 'tom',
//     author: 'naran',
//     genre:'novelist',
//     img:'helo.jpg'
// },
// {
//     title: 'tom',
//     author: 'naran',
//     genre:'novelist',
//     img:'helo.jpg'
// },
// ]
// authorsRouter.get('/',function(req,res){
//     res.render("authors",{
//         nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
//         // nav,
//         title:'Library',
//         authors
//     });
// }),

// authorsRouter.get('/:in',function(req,res){
// const id = req.params.in;
// res.render('author',{
//     nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
//     // nav,
//         title:'Library',
//         author:authors[id]
// });
// });
// return authorsRouter;
// }

// module.exports = authorsRouter;
const express = require('express');
const authorsRouter = express.Router();
function router(nav){
var authors =[
    {
    title: ' VAIKOM MUHHAMED BASHIR',
    author:'Writer',
    
    img: "vaikom.jpg"
},
{
    title: 'SUGATHAKUMARI',
    author:' Poet,Activist',
    
    img:"sugatha.jpg"
},
{
    title: 'M.T.VASUDHEVAN NAIR',
    author:'Writer,Film Director',
    
    img:"mt.jpg"
}
]

authorsRouter.get('/',function(req,res){
    res.render("authors",{
        // nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
        nav,
        title:'Library' ,
        authors
    });
});
// booksRouter.get('/single',function(req,res){
// res.send("hello");
// });
authorsRouter.get('/:id', function(req,res){
   const id = req.params.id
    res.render('author',{
        // nav:[{link:'/books',name:'Books'}, {link:'/authors',name:'Authors'}],
        nav,
        title:'Library',  
        author: authors[id]
    });
});
return authorsRouter;
}

module.exports = router;