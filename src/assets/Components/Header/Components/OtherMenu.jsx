import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiScalesFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const OtherMenu = () => {
  return (
    <ul className="w-12 text-center flex flex-col fixed top-1/3  right-0 z-10 mr-2">
      <li className=" bg-white  transition duration-1000 rounded-tl-lg p-2 border-2 border-slate-300 flex justify-center items-center  hover:bg-stone-200 cursor-pointer h-14">
        <a href="#" className="relative  inline-block ">
          <FaRegHeart className="text-xl cursor-pointer	" />
          <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
            0
          </span>
        </a>
      </li>
      <li className=" bg-white  transition duration-1000 p-2 border-2 border-slate-300 flex justify-center items-center  hover:bg-stone-200 cursor-pointer h-14">
        <a href="#" className="relative inline-block">
          <RiScalesFill className="text-xl cursor-pointer	" />
          <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
            0
          </span>
        </a>
      </li>
      <li className=" bg-white  transition duration-1000 p-2 border-2 border-slate-300 flex justify-center items-center  hover:bg-stone-200 cursor-pointer h-14">
        <a href="#" className="relative inline-block">
          <AiOutlineShoppingCart className="text-xl cursor-pointer	" />
          <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
            0
          </span>
        </a>
      </li>
      <li className=" bg-white  transition duration-1000 p-2 border-2 border-slate-300 flex justify-center items-center  hover:bg-stone-200 cursor-pointer h-14">
        <a href="#" className="relative inline-block">
          <IoSearch className="text-xl cursor-pointer	" />
        </a>
      </li>
      <li className=" bg-white  transition duration-1000 rounded-bl-lg p-2 border-2 border-slate-300 flex justify-center items-center  hover:bg-stone-200 cursor-pointer h-14">
        <a href="#" className="relative inline-block">
          <BsTelephone className="text-xl cursor-pointer	" />
        </a>
      </li>
    </ul>
  );
};

export default OtherMenu;
