const UserInfo = () => {
  return (
    <>
      <div className="p-5 flex lg:flex-row lg:items-center lg:justify-between md:flex-col md:justify-center md:items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <h2 className="text-nowrap">Muzammil Ahmed</h2>
        </div>
        <div className="flex gap-5">
          <img className="w-5 h-5 cursor-pointer" src="./more.png" alt="" />
          <img className="w-5 h-5 cursor-pointer" src="./video.png" alt="" />
          <img className="w-5 h-5 cursor-pointer" src="./edit.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
