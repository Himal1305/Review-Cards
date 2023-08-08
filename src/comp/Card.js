import React  from 'react'
import {FaQuoteLeft,FaQuoteRight } from "react-icons/fa"
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi"
import { useState } from "react"
import reviews from '../data'

export default function Card(props) {
    const [data,setdata]=useState(5)

    const reviews=props.reviews;
    function frontHandelar (){
        if(data -1 < 0){
            setdata(reviews.length - 1);
        }
        else{
            setdata(data-1);
        }    
    }
    const backHandelar=()=>{
        if(data +1 >= reviews.length){
            setdata(0);
        }    
        else{
            setdata(data+1)
        }
    }
    
    const randomHandelat=()=>{
        let randomdata=Math.floor(Math.random()*reviews.length)
        setdata(randomdata)
    }
    return (
    <div className='flex flex-col justify-center items-center text-gray-900   my-12'>
        <div className='flex  flex-col absolute -top-[10%] left-[5%]'>
            <img src={reviews[data].image} className=' h-[100px] rounded-full z-10' alt="" />
            <div className='h-[100px] w-[100px] rounded-full bg-blue-900 absolute bottom-1 left-1 z-0'></div>
        </div>
        <div className='flex flex-col justify-center items-center  '>
            <h2 className='font-bold'> {reviews[data].name}</h2>
            <h6 className=' text-xs text-blue-700 opacity-60' >{reviews[data].job}</h6>
            <FaQuoteLeft className='text-blue-700 opacity-60 text-xs my-2'/>
            <p className='mx-10 text-center text-xs text-black opacity-70 my-2' >  {reviews[data].text}</p>
            <FaQuoteRight className='text-blue-700 opacity-60 text-xs my-2' />
        </div>
        <div className='flex gap-5 my-4'>
        
            <BiSolidLeftArrow onClick={frontHandelar} className='text-blue-700 opacity-60 '/>
            <BiSolidRightArrow onClick={backHandelar} className='text-blue-700 opacity-60'/>
        </div>
        <button onClick={randomHandelat} className='bg-blue-700 opacity-70 px-4 rounded-sm text-white'>Random</button>
    </div>
  )
}
