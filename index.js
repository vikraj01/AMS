const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const router = require("./router/allRoute")
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(router)


app.get("/", (req,res,next) => {
    res.send(`Server Started`)
})

const PORT = process.env.PORT || 4500
const startServer = () => {
    mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connected`)
    app.listen(PORT, () => {console.log(`Server Started at http://localhost:${PORT}`)})
}
startServer()