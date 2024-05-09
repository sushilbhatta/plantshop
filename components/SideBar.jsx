import { IconContext } from "react-icons";
import homeIcon from "@/assets/homeIcon.svg";
import { PiPottedPlantLight } from "react-icons/pi";
import { PiSlidersHorizontal } from "react-icons/pi";
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";
export default function SideBar() {
  return (
    <div className='flex flex-col  justify-start gap-y-6 px-2 py-3  items-center bg-[#BEC7B4] rounded-full h-fit lg:py-10 lg:px-3 lg:gap-y-8 '>
      <button className=' w-4 h-4 lg:w-[2rem] lg:h-[2rem]'>
        <Image src={homeIcon} className='w-full h-full' alt='homeicon' />
      </button>
      <button className='rounded-full bg-[#EAF0E6] p-1 lg :p-2'>
        <IconContext.Provider
          value={{ size: "1rem", className: "lg:w-[2rem] lg:h-[2rem]" }}
        >
          <PiPottedPlantLight></PiPottedPlantLight>
        </IconContext.Provider>
      </button>

      <button className='w-4 h-4 lg:w-[2rem] lg:h-[2rem]'>
        <IconContext.Provider
          value={{ size: "1rem", className: "lg:w-[2rem] lg:h-[2rem]" }}
        >
          <BsCartDash></BsCartDash>
        </IconContext.Provider>
      </button>
      <button className='w-4 lg:w-8 lg:h-4 h-8'>
        <IconContext.Provider
          value={{
            size: "1rem",
            style: {
              border: "1px solid black",
              borderRadius: "10px",
              transform: "rotate(90deg)",
              padding: "2px",
            },
            className: "lg:w-[2rem] lg:h-[2rem]",
          }}
        >
          <PiSlidersHorizontal></PiSlidersHorizontal>
        </IconContext.Provider>
      </button>
    </div>
  );
}
