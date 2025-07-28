import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const OurPolicy = () => {
  return (
    <div className=' w-[100vw] h-[100vh] md:h-[70vh]
    flex items-center justify-start flex-col bg-gradient-to-l from-[#141414] 
    to-[#0c2025] gap-[50px]'>
      
        <div className='h-[8%] w-[100%] text-center mt-[70px]'>
                <Title text1={"OUR"} text2={"POLICY"}/>
              <p className='w-[100%] m-auto text-[13px] md:text-[20px]
            px-[10px] text-blue-100'>Customer-Friendly Policies - 
            Committed To Your Satisfaction and Safety.</p>
        </div>

        <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap
        lg:gap-[50px] gap-[80px]'>

            <div className='w-[400px] max-w-[90%] h-[60%] flex items-center
            justify-center flex-col gap-[10px]'>
                <RiExchangeFundsLine className='md:w-[60px] w-[30px] h-[30px] md:h-[60px]
                text-[#90b9ff]'/>
                <p className='font-semibold md:text-[25px] text-[19px]'>Easy Exchange Policy</p>
                <p className='font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center'>Exchange made Easy-Quick, Simple and Customer-Friendly Process.</p>
            </div>

             <div className='w-[400px] max-w-[90%] h-[60%] flex items-center
            justify-center flex-col gap-[10px]'>
                <TbRosetteDiscountCheckFilled className='md:w-[60px] w-[30px] h-[30px] md:h-[60px]
                text-[#90b9ff]'/>
                <p className='font-semibold md:text-[25px] text-[19px]'>7-Days return Policy</p>
                <p className='font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center'>shop with confidence -8 Days Easy Return Guarantee.</p>
            </div>

             <div className='w-[400px] max-w-[90%] h-[60%] flex items-center
            justify-center flex-col gap-[10px]'>
                <BiSupport className='md:w-[60px] w-[30px] h-[30px] md:h-[40px]
                text-[#90b9ff]'/>
                <p className='font-semibold md:text-[25px] text-[19px]'>24/7 Our Customer Support</p>
                <p className='font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center'>You can easy Connect our Customer team </p>
            </div>

        </div>

    </div>
  )
}

export default OurPolicy
