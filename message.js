const express=require('express')
const router=express.Router()

const fs=require('fs')

router.get('/message',(req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
        if(err){
            data='no chat history found'
        }
        res.send(`
        <div>${data}</div>
        <form method="POST" action="/userMessage" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="message" placeholder="type a message"></input>
        <input type="hidden" id="username" name="username"></input>
        <button type="submit">Send</button>
        </form>`)
    })
})
router.post('/userMessage',(req,res,next)=>{
    fs.writeFile('chat.txt',`\n${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect('/message')
    })
})

module.exports=router


//original code
// const express=require('express')
// const router=express.Router()

// const fs=require('fs')

// router.get('/message',(req,res,next)=>{
//     const chats=fs.readFile('chat.txt','utf-8',function (err,data){
//         if(err){
//             console.log(err)
//             data="No chat Exists!"
//         }
//         res.send(`${data}<form method="POST" action="/message" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">Enter Message<input type="text" name="message"></input><input type="hidden" name="username" id="username"></input><button type="submit">Send</button></form>`)
//     })
// })


// router.post('/message',(req,res,next)=>{
//     console.log(req.body.username,req.body.message)
//     fs.writeFile('chat.txt',`\n${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{   // we are using {flag:'a'} so that our new chat added to file otherwise by default it replaces the old one
//         err ? 'message not sent' : res.redirect('/message')
//     })
// })
// module.exports=router
