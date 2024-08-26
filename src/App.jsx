import Notification from "./Components/Notification";
import Chat from "../src/Components/Chat";
import Detail from "../src/Components/Detail";
import List from "../src/Components/List";
import Login from "../src/Components/Login";

const App = () => {
  const user = true;

  return (
    <>
      <div className="xl:w-[80vw] md:w-[95vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-[19px] backdrop-saturate-[180%] border-solid border-[1px] border-[rgba(255,255,255,0.125)] rounded-xl flex">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
};

export default App;
