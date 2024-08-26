import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, settext] = useState("");

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    settext((prev) => prev + e.emoji);
  };
  return (
    <>
      <div className=" flex-1 border-l-[1px] border-l-[#DDDDDD35] border-r-[1px] border-r-[#DDDDDD35] flex flex-col   w-[50%]">
        <div className="p-5 flex items-center justify-between border-b-[1px] border-b-[#DDDDDD35]">
          <div className="flex items-center gap-5">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold">Anis Saleem</span>
              <p className="text-sm font-light text-[#A5A5A5]">
                Lorem ipsum dolor, sit amet.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <img className="w-5 h-5" src="./phone.png" alt="" />
            <img className="w-5 h-5" src="./video.png" alt="" />
            <img className="w-5 h-5" src="./info.png" alt="" />
          </div>
        </div>

        <div className="p-5 flex-1 overflow-y-scroll flex flex-col gap-5">
          <div className="max-w-[70%] flex gap-5">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[rgba(17,25,40,0.3)] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit, aliquid iusto
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="self-end">
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[#5183fe] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit.
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="max-w-[70%] flex gap-5">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex-1 flex flex-col gap-1">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/26555831/pexels-photo-26555831/free-photo-of-iceberg-on-sea-shore.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="self-end">
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[#5183fe] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit.
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="max-w-[70%] flex gap-5">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[rgba(17,25,40,0.3)] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit, aliquid iusto
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="self-end">
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[#5183fe] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit.
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="max-w-[70%] flex gap-5">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="./avatar.png"
              alt=""
            />
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[rgba(17,25,40,0.3)] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit, aliquid iusto
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div className="self-end">
            <div className="flex-1 flex flex-col gap-1">
              <p className="bg-[#5183fe] p-5 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                non odio? Odit.
              </p>
              <span className="text-sm">1 min ago</span>
            </div>
          </div>

          <div ref={endRef}></div>
        </div>
        <div className="p-5 flex items-center justify-between border-t-[1px] border-t-[#DDDDDD35] gap-5 mt-auto">
          <div className="flex gap-5">
            <img className="w-5 h-5 cursor-pointer" src="./img.png" alt="" />
            <img className="w-5 h-5 cursor-pointer" src="./camera.png" alt="" />
            <img className="w-5 h-5 cursor-pointer" src="./mic.png" alt="" />
          </div>
          <input
            className="flex-1 bg-[rgba(17,25,40,0.5)] border-none outline-none text-white p-2 rounded-[10px] text-[16px] "
            value={text}
            type="text"
            placeholder="Type a message..."
            onChange={(e) => settext(e.target.value)}
          />
          <div className="relative">
            <img
              className="w-5 h-5 cursor-pointer"
              src="./emoji.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
            <div className="absolute bottom-[50px] left-0">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="bg-[#5183fe] text-white py-[6px] px-5 border-none rounded-[5px] cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
