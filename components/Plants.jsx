import { IconContext } from "react-icons";
import { FaPlus, FaSearch } from "react-icons/fa";
import { TbFilterPlus } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import monsteraPlantImg from "@/assets/Monstera-in-Pure-White.png";
import kentiaPlamImg from "@/assets/kentia_palm.png";
import ChinesePlant from "@/assets/bird_of_paradise.png";
import Image from "next/image";

export default function Plants() {
  return (
    <div className='p-4 w-full h-auto backdrop-filter backdrop-blur-3xl rounded-[40px] shadow-xl lg:rounded-[50px] lg:px-8 '>
      <div className='flex justify-between items-center p-1 w-full gap-4'>
        <div className=' flex w-1/2 gap-4 items-center '>
          <IconContext.Provider
            value={{ size: "1rem", className: "lg:w-8 lg:h-8" }}
          >
            <button className='bg-[#B9C6B4] p-2 rounded-full'>
              <CiGrid41></CiGrid41>
            </button>

            <button className='bg-[#B9C6B4] p-2 lg:w-8 lg:h-8  rounded-full'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 15'
                fill='black'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.535 0.999999C8.64261 0.999999 8.73946 1.04022 8.80576 1.10209C8.87088 1.16288 8.90038 1.23765 8.90038 1.30769C8.90038 1.37773 8.87088 1.4525 8.80576 1.51329C8.73946 1.57516 8.64261 1.61538 8.535 1.61538H4.20807C3.62714 1.61538 3.06365 1.83045 2.64308 2.22299C2.22133 2.61662 1.9773 3.15817 1.9773 3.73077V11.2692C1.9773 11.8418 2.22133 12.3834 2.64308 12.777C3.06365 13.1695 3.62714 13.3846 4.20807 13.3846H12.285C12.8659 13.3846 13.4294 13.1695 13.85 12.777C14.2717 12.3834 14.5158 11.8418 14.5158 11.2692V7.23077C14.5158 7.16073 14.5453 7.08596 14.6104 7.02517C14.6767 6.96329 14.7735 6.92308 14.8811 6.92308C14.9888 6.92308 15.0856 6.96329 15.1519 7.02517C15.217 7.08596 15.2465 7.16073 15.2465 7.23077V11.2692C15.2465 11.9819 14.9435 12.673 14.3915 13.1882C13.8383 13.7045 13.0811 14 12.285 14H4.20807C3.41192 14 2.65472 13.7045 2.10155 13.1882C1.54955 12.673 1.24653 11.9819 1.24653 11.2692V3.73077C1.24653 3.01809 1.54955 2.327 2.10155 1.8118C2.65472 1.29551 3.41192 0.999999 4.20807 0.999999H8.535ZM14.7295 3.81132C14.3927 4.12565 13.929 4.30769 13.4388 4.30769C12.9487 4.30769 12.485 4.12565 12.1482 3.81132C11.8126 3.49808 11.6311 3.0809 11.6311 2.65385C11.6311 2.22679 11.8126 1.80961 12.1482 1.49637C12.485 1.18205 12.9487 0.999999 13.4388 0.999999C13.929 0.999999 14.3927 1.18205 14.7295 1.49637C15.0651 1.80961 15.2465 2.22679 15.2465 2.65385C15.2465 3.0809 15.0651 3.49808 14.7295 3.81132Z'
                  fill='#B9C6B4'
                  stroke='black'
                  strokeWidth={0.8}
                />
              </svg>
            </button>
            <button className='bg-[#B9C6B4] p-2  rounded-full'>
              <TbFilterPlus></TbFilterPlus>
            </button>
          </IconContext.Provider>
        </div>

        <div className='flex justify-center items-center relative p-1 bg-[#B9C6B4] rounded-full'>
          <input
            type='search'
            placeholder='Search'
            className='w-full rounded-full placeholder:text-[1rem]  bg-[#B9C6B4] placeholder:text-gray-600 lg:p-2 lg:placeholder:text-[1.5rem] placeholder:pl-2 focus-within:outline-none'
          ></input>
          <IconContext.Provider
            value={{
              size: "1rem",
              color: "rgba(0, 0, 0, 0.9)",
              className:
                "absolute right-2 top-2 cursor-pointer lg:w-6 lg:h-6 lg:right-4 lg:top-[15px]  ",
            }}
          >
            <FaSearch></FaSearch>
          </IconContext.Provider>
        </div>
      </div>
      <div className='flex items-center justify-center lg:justify-between p-4 pb-8 lg:pb-16'>
        <div className='w-[30%] hidden lg:block'>
          <Image
            src={monsteraPlantImg}
            alt='Monstera plant'
            className='w-full'
          />
          <h2 className=' text-center font-bold text-base lg:text-lg text-white'>
            Monstera plant
          </h2>
          <p className='text-base text-center lg:text-lg text-white'>$244</p>
        </div>
        <div className='w-[40%] lg:w-[30%] '>
          <Image src={kentiaPlamImg} alt='Kentia Palm' />
          <h2 className='font-bold text-base text-center lg:text-lg text-white hidden lg:block'>
            Kentia Palm
          </h2>
          <p className='lg:text-lg  text-base text-center text-white hidden lg:block'>
            $244
          </p>
        </div>
        <div className='w-[30%] hidden lg:block'>
          <Image src={ChinesePlant} alt='Chinese Plant' />
          <h2 className='font-bold text-center text-base lg:text-lg text-white'>
            Chinese Plant
          </h2>
          <p className='lg:text-lg text-center text-base text-white'>$244</p>
        </div>
      </div>
      <div className='bg-[#929B8A] w-30%  rounded-full flex  gap-x-4 items-center py-1  px-4 bg-opacity-80 backdrop-filter backdrop-blur-lg absolute bottom-[-20px] lg:bottom-[-50px]  left-1/2 transform -translate-x-1/2 max-w-[840] lg:gap-x-8 lg:p-4:lg:px-10 '>
        <div className='flex flex-col text-start text-white lg:gap-2'>
          <h1 className=' text-sm lg:text-lg min-w-[118px]'>
            Monstera Deliciosa
          </h1>
          <p className='text-sm lg:text-lg font-bold'>$244</p>
        </div>
        <button className='rounded-full bg-[white] p-2 lg:p-3  flex items-center gap-1 '>
          <IconContext.Provider value={{ size: "0.5rem", color: "black" }}>
            <FaPlus></FaPlus>
          </IconContext.Provider>
          <p className='text-black text-[8px] lg:text-lg whitespace-nowrap '>
            Add to Cart
          </p>
        </button>
      </div>
    </div>
  );
}
