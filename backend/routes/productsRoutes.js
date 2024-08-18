import express from "express"
import { addProdct } from "../controllers/productsController"
import multer from "multer"

const productRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cd) => {
        return cd(null, `${Date.noew()}$file.originalname`)
    }
})

const uploads = multer({ storage: storage })



productRouter.post("/add", uploads.single("image"), addProdct)




export default productRouter;