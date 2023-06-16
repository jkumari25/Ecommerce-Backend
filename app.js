const express= require('express');
const app= express();
const cookieParser= require('cookie-parser');
const errorMiddleware= require("./Middleware/error");
const bodyParser= require('body-parser');
const fileupload= require("express-fileupload");
const dotenv= require("dotenv");
const path= require("path");
const cors= require("cors");

app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"],
}));

app.use(express.json());

// Config
dotenv.config({path:"config/config.env"});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

// Route Imports
const product= require("./routes/productRoute");
const user= require("./routes/userRoute");
const order= require("./routes/orderRoute");
const payment= require("./routes/paymentRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

// app.use(express.static(path.join(__dirname,"../Frontend/ecommerce-app/build")));

// app.get("*", (req,res) =>{
//     res.sendFile(path.resolve(__dirname,"../Frontend/ecommerce-app/build/index.html"));
// })

//Middleware for errors
app.use(errorMiddleware);


module.exports= app