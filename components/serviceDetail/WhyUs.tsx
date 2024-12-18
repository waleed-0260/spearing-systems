import React from 'react'

const WhyUs = ({help}:any) => {
  return (
    <div className='w-full flex items-center justify-center bg mt-[30px]'>
        <div className='sm:w-[80%] w-[90%] m-[30px]'>
          <p className='font-bold md:text-4xl text-2xl heading text-center text-white'>
            {help?.heading}
          </p>
            <p className='text-center text text-white text-xl'>
            {help?.text}
            </p>
        </div>
    </div>
  )
}

export default WhyUs