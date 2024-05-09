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
          {/* Component Here */}
        </div>
      </main>
    </>
  );
}
