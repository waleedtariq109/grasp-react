import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Error from "./components/Error";
import User from "./components/User";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about" element={<Navigate to="/about-us" />} />
          <Route path="/users/:name" element={<User />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
