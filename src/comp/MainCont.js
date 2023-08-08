import React from 'react'
import Card from './Card'

export default function MainCont(props) {
 
  const reviews=props.reviews

    return (
    <div className='flex flex-col justify-center items-center mx-auto '>
        <div className=' my-9'>
            <h1 className='font-bold text-xl'>Our Testimonials</h1>
            <div className='h-1 w-[80%] mx-auto bg-blue-900'></div>
        </div>
        <div className=' w-[40%] bg-white relative'>
            <Card  reviews={reviews}/>
        </div>
    </div>
  )
}
