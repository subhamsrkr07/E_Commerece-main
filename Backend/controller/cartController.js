import User from "../model/userModel.js"

export const addToCart =async(req,res)=>{
    try {
        const {itemId}=req.body
        const userData=await User.findById(req.userId)
        if(!userData){
            return res.status(404).json({message:"user not found"})
        }
        let cartData = userData.cartData ||{}

        if(cartData[itemId]){
        cartData[itemId]+=1
      } else {
        cartData[itemId]=1
      }

      await User.findByIdAndUpdate(req.userId,{cartData})
      return res.status(201).json({message:"Added to cart"})


    } catch (error) {
       console.log(error) 
    }
}


export const UpdateCart = async(req,res)=>{
    try {
        const {itemId,quantity}=req.body
        const userData = await User.findById(req.userId)
        let cartData = await userData.cartData
        cartData[itemId]=quantity
        await User.findByIdAndUpdate(req.userId,{cartData})
        return res.status(201).json ({message:"cart updated"})

    } catch (error) {
        console.log(error)
    }
}


export const getUserCart = async(req,res)=>{
try {
    
    const userData = await User.findById(req.userId)
     if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    let cartData=await userData.cartData;
    return res.status(200).json(cartData)
} catch (error) {
    console.log(error)
    return res.status(500).json({message:"getUsercart error"})
}
    
}