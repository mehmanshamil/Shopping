import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiScalesFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import Category from "./Components/Category";

let categoryData = ["Kataloq", "Qızlar", "Oğlanlar", "Kampaniyalar", "Hədiyyə"];

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="container w-11/12">
        <div className="head flex justify-between items-center">
          <div className="logo w-2/12 flex justify-end">
            <img
              className="w-10/12"
              src="https://supertoys.fra1.cdn.digitaloceanspaces.com/supertoys/logo/1681902251.png"
              alt="logo"
            />
          </div>
          <form action="#" className="w-7/12 relative flex items-center ">
            <button className="absolute pl-2 text-2xl">
              <IoSearch />
            </button>
            <input
              className="w-full p-2 focus:outline-none pl-9 bg-stone-200 rounded-lg"
              type="text"
              placeholder="Axtarış"
            />
          </form>
          <div className="moreInfo flex w-2/12 justify-around pr-5">
            <ul className="detailFeature flex gap-4">
              <li>
                <a href="#" className="relative ">
                  <FaRegHeart className="text-xl cursor-pointer	" />
                  <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
                    0
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="relative">
                  <RiScalesFill className="text-xl cursor-pointer	" />
                  <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
                    0
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="relative">
                  <AiOutlineShoppingCart className="text-xl cursor-pointer	" />
                  <span className="absolute -top-3 bg-red-600 rounded-full w-5 h-5 -right-3 flex justify-center items-center text-white text-xs">
                    0
                  </span>
                </a>
              </li>
            </ul>
            <ul className="flex gap-3">
              <li>
                <a href="#">*9999</a>
              </li>
              <li className="flex items-center">
                <TfiWorld />
                <select
                  className="cursor-pointer focus:outline-none"
                  name="AZ"
                  id=""
                >
                  <option className="cursor-pointer" value="az">
                    Az
                  </option>
                  <option className="cursor-pointer" value="en">
                    En
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="category flex gap-3 mt-2">
          {categoryData &&
            categoryData.map((item, index) => (
              <Category key={index} item={item} />
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
