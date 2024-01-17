import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-sky-100 via-sky-50 to-sky-200">
      <div className=" flex flex-col md:flex-row gap-8 p-4 ">
        <div className="flex flex-col gap-4 md:gap-6 w-1/4">
          <div className="font-extrabold text-3xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900">
            AriSaf Blogs
          </div>
          <div className="flex flex-col ">
            <div className="text-textSub text-sm font-normal">
              Easily sort CVs and find skills using CV Sorting to speed up your
              hiring process.
            </div>
            <div className="flex flex-col">
              <div className="text-textSub text-base font-normal">Call US</div>
              <div className="text-primary text-lg font-normal">
                +880 1678 564 984
              </div>
            </div>
            <div className="text-textSub text-sm font-normal">
              youremail@gmail.com
            </div>
            <div className="text-textSub text-sm font-normal">
              Flat 4, 79 Chester Road, Exeter, EX96 1FY
            </div>
          </div>
        </div>
        
          <div className="flex flex-col  gap-4 md:gap-6  w-2/4">
            <div className=" text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-900 ">
              Categories
            </div>
            <div className="grid grid-cols-5 gap-2 text-sm font-normal">
              <div className="cursor-pointer">World</div>
              <div className="cursor-pointer">Local</div>
              <div className="cursor-pointer">Business</div>
              <div className="cursor-pointer">Technology</div>         
              <div className="cursor-pointer">Sports</div>    
              <div className="cursor-pointer">Science</div>
              <div className="cursor-pointer">Health</div>
              <div className="cursor-pointer">Entertainment</div>
            </div>
          </div>

        <div className="flex flex-col gap-4 md:gap-6 w-1/4 ">
          <div className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-900">
            Preferance
          </div>
          <div className="flex flex-col text-sm font-normal ">
            <div className="cursor-pointer">About US</div>
            <div className="cursor-pointer">Contact Us</div>
            <div className="cursor-pointer">Terms & Conditions</div>
            <div className="cursor-pointer">Privacy & Policy</div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 gap-4 border-solid border-t-1 border-sky-300">
        <div className="text-sm font-normal text-center ">
          2023 © All rights reserved by Nike Shoes.
        </div>
        <div className="hidden md:flex gap-2">
          <FaFacebook className="stroke-none fill-NeonPink hover:fill-sky-800 h-5 w-5" />
          <FaInstagramSquare className="stroke-black fill-black hover:fill-fuchsia-500 hover:stroke-purple-500 h-5 w-5" />
          <FaTwitterSquare className="stroke-black fill-black hover:fill-sky-600 hover:stroke-NeonPink h-5 w-5" />
          <IoLogoYoutube className="stroke-white fill-NeonPink hover:fill-red-700 hover:stroke-NeonPink h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;