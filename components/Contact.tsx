import React from 'react'
import { Button } from "./ui/button";
import { FaArrowLeft } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className={`w-full flex items-center justify-center bg text-white `}>
    <div className="w-[80%] flex flex-col items-center mt-[100px]">
      <p className="font-bold text-2xl heading">
        READY TO GROW YOUR BUSINESS
      </p>
      <div className="flex md:flex-row flex-col m-6 gap-4">
        <div className="md:w-[50%] flex flex-col mt-9 text-white">
          <div className="flex flex-row gap-4">
            <p className="h-[40px] w-[40px] text-center flex  items-center justify-center rounded-[100px] bg-[#FF8E2B] gap-3">
              <FaArrowLeft />
            </p>
            <div>
              <p className="heading text-2xl">
                Ready to Dominate Your Market?
              </p>
              <p className="text">
                Jumpstart your digital marketing success in 3 easy steps:
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-[20px]">
            <p className="h-[40px] w-[70px] text-center flex  items-center justify-center rounded-[100px] bg-[#FF8E2B] gap-3">
              1
            </p>
            <div>
              <p className="heading text-2xl">Contact Us</p>
              <p className="text">
                Fill out our brief contact form, and we’ll be in touch with
                you soon to learn more about your business.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <p className="h-[40px] w-[80px] text-center flex  items-center justify-center rounded-[100px] bg-[#FF8E2B]">
              2
            </p>
            <div>
              <p className="heading text-2xl">Launched Target Campaigns</p>
              <p className="text">
                Our digital marketing experts will work closely with you to
                implement data-driven strategies that drive business growth.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <p className="h-[40px] w-[70px] text-center flex  items-center justify-center rounded-[100px] bg-[#FF8E2B]">
              3
            </p>
            <div>
              <p className="heading text-2xl">Achieve Lasting Growth </p>
              <p className="text">
                Solidify your digital presence, expand your brand reach and
                see outstanding results month-over-month.
              </p>
            </div>
          </div>
          <hr className="mt-5"/>
        </div>

        <div className=" flex flex-col md:w-[65%] m-4">
          <p className="font-bold text-xl mid-heading">
            Get a Free consultation
          </p>
          <form action="" className="flex flex-col p-5 bg-[#e8e8e8] rounded-md text-black">
            <label className="mt-4" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              className="p-4 bg-white border-[1px] border-[#F5F5F5]"
            />
            <label className="mt-4" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-4 bg-white border-[1px] border-[#F5F5F5]"
            />
            <label className="mt-4" htmlFor="email">
              Subject
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Subject"
              className="p-4 bg-white border-[1px] border-[#F5F5F5] "
            />
            <label className="mt-4" htmlFor="email">
              Message
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-4 bg-white border-[1px] border-[#F5F5F5]"
            />
            <Button className="bg-white text-black mt-4 rounded-[100px]">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact