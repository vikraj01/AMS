const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const router = require("./router/allRoute")
const morgan = require("morgan")
const cors = require("cors")
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())
app.use(morgan("tiny"))


app.use(router)

app.get("/", (req,res,next) => {
    res.send(`Server Started`)
})

const PORT = process.env.PORT || 4500
const startServer = async() => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connected`)
    app.listen(PORT, () => {console.log(`Server Started at http://localhost:${PORT}`)})
}
startServer()