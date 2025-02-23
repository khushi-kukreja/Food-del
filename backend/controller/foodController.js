import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs from 'fs'


const addFood=async(req,resp)=>{
  
    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        resp.json({success:true,message:"Food Added"});
    }catch(error){
        console.log(error)
        resp.json({success:false,message:"Error"});
    }
}


//food list
const listfood=async(req,resp)=>{
 try{
    const foods=await foodModel.find();
    resp.json({success:true,data:foods})
 }catch(error){
    console.log("Error")
    resp.json({success:false,message:"Error"})
 }
}

//remove food 
const removeFood=async(req,resp)=>{
    try{
         const food=await foodModel.findById(req.body.id);
         fs.unlink(`uploads/${food.image}`,()=>{})

         await foodModel.findByIdAndDelete(req.body.id);
         resp.json({success:true,message:"Food Removed"});
    }catch(error){
           console.log(error);
           resp.json({success:false,message:"No Food Removed"});
    }
}

export {addFood,listfood,removeFood}