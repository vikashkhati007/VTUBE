import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
const Input = () => {
  return (
    <div className="flex justify-center items-center space-x-5 w-[37rem]">
      <div className="flex justify-end items-center w-[35rem]">
        <div className="iconconatiner absolute border border-white border-opacity-20 h-10 w-20 flex justify-center items-center rounded-r-full cursor-pointer bg-[#222222]">
          <GoSearch className="text-white text-xl" />
        </div>
        <input
          autoFocus
          className="bg-[#121212] w-full pl-5 outline-none p-2 text-white border rounded-full border-white border-opacity-20"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="cursor-pointer bg-white bg-opacity-10 rounded-full p-2">
        <MdKeyboardVoice className="text-white text-2xl  " />
      </div>
    </div>
  );
};

export default Input;