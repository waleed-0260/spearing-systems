import React from "react";
import platform from "../../public/images/platform.webp";
import Image from "next/image";
const Email = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center">
        {/* FIRST SECTION */}
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-col w-[50%] ">
            <p className="font-bold text-xl heding">Email Platform Migration</p>
            <p className="mid-heading">
              If you’ve outgrown your platform, Northern can not only mitigate
              any lost revenue but drive revenue growth on your new platform.
            </p>
            <ul className="list-disc mt-4">
              <li className="mt-2">Migration Plan & Mapping</li>
              <li className="mt-2">IP Warming & Account Ramp-up</li>
              <li className="mt-2">Automation Replication</li>
              <li className="mt-2">Onboarding & Training</li>
            </ul>
          </div>

          <div className="w-[50%]">
            <Image src={platform} alt="" className="w-[200px]  h-[100px]"/>
          </div>
        </div>

        {/* SECOND SECTION */}

        <div className="flex flex-row items-center justify-between mt-5">
        <div className="flex flex-col w-[50%]">
            <p className="font-bold text-xl heding">Email Template Design & Copy            </p>
            <p className="mid-heading">
            Using a combination of technical expertise, testing, and creativity, our team designs emails that drive engagement and look great on any device. Whether that’s desktop or mobile, we ensure they receive emails that are functional, beautiful, and effective.
            </p>
            <ul className="list-disc mt-4">
              <li className="mt-2">Email Design & Copywriting              </li>
              <li className="mt-2">Customizable Email Template Creation</li>
              <li className="mt-2">Optimization for Devices & Dark Mode</li>
              <li className="mt-2">Creative Iteration & Testing</li>
            </ul>
          </div>

          <div className="w-[50%]">
            <Image src={platform} alt="" className="w-[200px]  h-[100px]"/>
          </div>
        </div>

{/* THIRD SECTION */}

        <div className="flex flex-row items-center justify-between mt-5">
          <div className="w-[50%]">
            <Image src={platform} alt="" className="w-[200px]  h-[100px]"/>
          </div>

          <div className="flex flex-col w-[50%]">
            <p className="font-bold text-xl heding">Email Marketing Automation</p>
            <p className="mid-heading">
            We build automated email workflows designed to connect with your audience at every stage of the buying journey. Leveraging our team’s expertise and ability to implement complex systems integrations will level up your email & SMS channels to increase revenue.
            </p>
            <ul className="list-disc mt-4">
            <li>Integrated SMS Touchpoints</li>
  <li>Segmentation & Personalization</li>
  <li>Customer Behaviour Tracking</li>
  <li>Third-Party Platform Integrations</li>
  <li>Dynamic Content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
