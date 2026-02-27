import e from "express";
import cookieParser from "cookie-parser";
import connect from "./utils/ConnectToDB.js";
const app = e();
import dotenv from "dotenv";
dotenv.config();   

;(() =>connect())();
app.use(e.json());
app.use(e.urlencoded({extended:true}));
app.use(cookieParser());


// app.use("/useres" , usersRoutes);
// app.use("/useres" , ownersRoutes);
// app.use("/useres" , productsRoutes);


app.listen(process.env.PORT);