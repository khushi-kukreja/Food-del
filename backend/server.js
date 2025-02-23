import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';

//app config
const app=express();
const port=process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use(cors())

///db connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use('/api/cart',cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,resp)=>{
    resp.send("API Working!");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://khushikuk123:roshni1208@cluster0.2lpre.mongodb.net/?