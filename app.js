const express=require('express')
const app=express()

const bodyParsed=require('body-parser')
app.use(bodyParsed.urlencoded())

const loginPage=require('./login')
const messagePage=require('./message')


app.use(loginPage)
app.use(messagePage)

app.listen(4500)


//original code
// const express=require('express')
// const app=express()

// const messagePage=require('./message')
// const loginPage=require('./login')
// const bodyParsed=require('body-parser')

// app.use(bodyParsed.urlencoded())

// app.use(messagePage)
// app.use(loginPage)

// app.listen(4000)