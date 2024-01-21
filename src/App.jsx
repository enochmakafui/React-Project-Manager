import MainPage from "./Components/MainPage";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <SideBar />
        <MainPage />
      </div>
    </>
  );
}

export default App;
