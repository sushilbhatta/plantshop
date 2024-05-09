"use client";
import { IconContext } from "react-icons";
import SideBar from "@/components/SideBar";
import { CiLock } from "react-icons/ci";

export default function page() {
  return (
    <>
      <main
        id='app'
        className='flex  inset-0 justify-center items-center p-4 gap-4 lg:gap-8 lg:px-16'
      >
        <SideBar></SideBar>
        <div className='flex flex-col justify-center items-center gap-3 lg:gap-6'>
          <div className='bg-gradient-to-r from-[#A4B998] to-[#C6DBBC] rounded-full flex justify-start items-center p-2 pl-4 gap-x-1  lg:p-3 lg:pl-6 lg:gap-x-2  lg:min-w-[268px] '>
            <span>
              <IconContext.Provider
                value={{ size: "1rem", className: "lg:w-[2rem] lg:h-[2rem]" }}
              >
                <CiLock />
              </IconContext.Provider>
            </span>
            <p className=' text-base lg:text-2xl align-middle '>
              https://www.myplant.com//
            </p>
          </div>
          {/* content */}
        </div>
      </main>
    </>
  );
}
