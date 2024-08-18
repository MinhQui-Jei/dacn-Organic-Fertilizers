import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productsModel from "./models/productsModel.js"


// app config 
const app = express()
const port = 4000


// middlewate

app.use(express.json())
app.use(cors())


//db connection
connectDB();

// db endpoints
app.use("/api/product", productsModel)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://minhqui:2003@cluster0.doo3n.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0