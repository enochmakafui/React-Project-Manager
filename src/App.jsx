import { useState } from "react";
import MainPage from "./Components/MainPage";
import SideBar from "./Components/SideBar";
import NewProjectForm from "./Components/NewProjectForm";

function App() {
  const [showAddProjectPage, setShowAddProjectPage] = useState(false);

  const showPageHandler = () => {
    setShowAddProjectPage(!showAddProjectPage);
  };

  return (
    <>
      <div className="grid grid-cols-2 ">
        <SideBar showPage={showPageHandler} />
        {showAddProjectPage ? <NewProjectForm /> : <MainPage />}
      </div>
    </>
  );
}

export default App;
