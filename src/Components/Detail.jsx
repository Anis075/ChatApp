const Detail = () => {
  return (
    <>
      <div className="flex-2 w-[25%] overflow-y-scroll">
        <div className="px-7 py-5 flex flex-col items-center gap-5 border-b-[1px] border-b-[#DDDDDD35]">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <h2>Anis Saleem</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="p-5 flex flex-col gap-7 ">
          <div>
            <div className="flex items-center justify-between">
              <span>Chat Setting</span>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-[10px] rounded-full cursor-pointer"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span>Chat Setting</span>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-[10px] rounded-full cursor-pointer"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span>Privacy & Help</span>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-[10px] rounded-full cursor-pointer"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div>
              <div className="flex items-center justify-between">
                <span>Shared Photos</span>
                <img
                  className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-[10px] rounded-full cursor-pointer"
                  src="./arrowDown.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center lg:gap-5 md:gap-2">
                <img
                  className="w-10 h-10 rounded object-cover"
                  src="https://images.pexels.com/photos/26555831/pexels-photo-26555831/free-photo-of-iceberg-on-sea-shore.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-3 rounded-full cursor-pointer"
                src="./download.png"
                alt=""
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center lg:gap-5 md:gap-2">
                <img
                  className="w-10 h-10 rounded object-cover"
                  src="https://images.pexels.com/photos/26555831/pexels-photo-26555831/free-photo-of-iceberg-on-sea-shore.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-3 rounded-full cursor-pointer"
                src="./download.png"
                alt=""
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center lg:gap-5 md:gap-2">
                <img
                  className="w-10 h-10 rounded object-cover"
                  src="https://images.pexels.com/photos/26555831/pexels-photo-26555831/free-photo-of-iceberg-on-sea-shore.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-3 rounded-full cursor-pointer"
                src="./download.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span>Shared Files</span>
              <img
                className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-[10px] rounded-full cursor-pointer"
                src="./arrowUp.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <button className="p-[15px] bg-[rgba(230,74,105,0.553)] hover:bg-[rgba(220,20,60,0.796)] text-white border-none rounded cursor-pointer ">
              Block User
            </button>
            <button className="p-[10px] bg-[#1A73E8]">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
