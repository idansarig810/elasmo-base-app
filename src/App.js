import "./App.css";
import { Route, Routes } from "react-router-dom";

import HeadBar from "./components/headerBar/HeaderBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <>
      <div className="App">
        <HeadBar />
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
