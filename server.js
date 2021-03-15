const express = require('express')
const PORT = process.env.PORT || 8000

// our server container
const app = express();

// middleware 
app.use(express.json()) // lets us read incoming req.body data as json

// create 
app.post('/', async (req,res)=>{
    try {
        res.json('working1')
    } catch (err) {
        console.error(err.message)
    }
})
//read all
app.get('/', async (req,res)=>{
    try {
        res.json('working2')
    } catch (err) {
        console.error(err.message)
    }
})
//update
app.patch('/', async (req,res)=>{
    try {
        res.json('working3')
    } catch (err) {
        console.error(err.message)
    }
})
//delete
app.delete('/', async (req,res)=>{
    try {
        res.json('working4')
    } catch (err) {
        console.error(err.message)
    }
})
// causes our server to listen for incoming reuqests to this port
app.listen(PORT, ()=>{
    console.log(`LISTINING ON PORT ${PORT}`)
});