import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <>
      <div className="flex-1 overflow-y-scroll ">
        <div className="flex items-center gap-5 p-5 md:flex-col lg:flex-row">
          <div className="flex-1 bg-[rgba(17,25,40,0.5)] flex items-center gap-5 rounded-[10px] p-[10px]">
            <img className="w-5 h-5" src="./search.png" alt="" />
            <input
              className="bg-transparent border-none outline-none text-white flex-1"
              type="text"
              placeholder="Search"
            />
          </div>
          <img
            className="w-9 h-9 bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px] cursor-pointer"
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
        <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-b-[#DDDDDD35]">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div>
            <span>Anis Saleem</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-b-[#DDDDDD35]">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div>
            <span>Anis Saleem</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-b-[#DDDDDD35]">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div>
            <span>Anis Saleem</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-b-[#DDDDDD35]">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div>
            <span className="flex flex-col gap-2">Anis Saleem</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
