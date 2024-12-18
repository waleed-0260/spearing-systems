import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CallTo = ({tell}:any) => {
  return (
    <div className='bg w-full flex items-center justify-center'>
        <div className='flex md:flex-row flex-col w-[80%] gap-4 md:gap-0 items-center justify-between p-4'>
            <div className='flex flex-col'>
                <p className='font-bold md:text-4xl text-2xl heading'> {tell?.heading ? tell.heading :"Let's Collaborate"}</p>
                <p className='text mt-3 text-white w-[80%]'>{tell?.text ? tell.text :"Bring your vision to life with tailored solutions. Reach out today"}</p>
            </div>
            <Button className='bg-white hover:bg-[#FF8E2B] text-black text-center'><Link href={"/contact"}>CONTACT US TODAY</Link></Button>
        </div>
    </div>
  )
}

export default CallTo