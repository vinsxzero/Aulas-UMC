import express,{Request,Response,NextFunction} from "express";
import { router } from "./routes";
import "express-async-errors"
import "reflect-metadata"
import "./database/index"
const app = express();
app.use(express.json());
app.use(router);
app.use(
    (err: Error, request:Request, response:Response, next:NextFunction) =>{
        if (err instanceof Error){
            return response.status(400).json({
                error: err.message
            })
        }
        return response.status(500).json({
            status: "error",
            message:"Internal Server Error"
        })
    }
)
console.log("Start Server At:3000");
app.listen(3000);
