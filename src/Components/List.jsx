import ChatList from "./ChatList";
import UserInfo from "./UserInfo";

const List = () => {
  return (
    <>
      <div className=" flex flex-col flex-2 w-[25%]">
        <UserInfo />
        <ChatList />
      </div>
    </>
  );
};

export default List;
