const express=require('express')
const router=express.Router()

router.get('/login',(req,res,next)=>{
    res.send(
    `<form method="POST" action="/userLogin" onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
    <input type="text" id="username" name="username" placeholder="Enter Your Name">
    <button type="submit">Login</button>
    </form>`)
})

router.post('/userLogin',(req,res,next)=>{
    // console.log(req.body.username)
    res.redirect('/message')
})

module.exports=router


//original code
// const express=require('express')
// const router=express.Router()

// router.get('/login',(req,res,next)=>{
//     res.send('<form method="POST" action="/login" onsubmit="localStorage.setItem(`username`,document.querySelector(`#username`).value)">Enter Your Name<input type="text" name="username" id="username"><button type="submit">Login</button></input></form>')
// })
// router.post('/login',(req,res,next)=>{
//     console.log(req.body.username)
//     res.redirect('/message')
// })
// module.exports=router

