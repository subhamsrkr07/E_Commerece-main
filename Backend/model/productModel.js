import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
     name:{
        type:String,
        require:true
     },
      image1:{
        type:String,
        require:true
     },
      image2:{
        type:String,
        require:true
     },
      image3:{
        type:String,
        require:true
     },
      image4:{
        type:String,
        require:true
     },
      description:{
        type:String,
        require:true
     },
      price:{
        type:Number,
        require:true
     },
      category:{
        type:String,
        require:true
     },
      subCategory:{
        type:String,
        require:true
     },
      date:{
        type:Number,
        require:true
     },
      bestseller:{
        type:Boolean,
        
     },
},{timestamps:true}
)


const Product = mongoose.model("Product",productSchema)

export default Product