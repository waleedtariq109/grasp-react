import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Error from "./components/Error";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* /about route is depracted. but we will keep this as redirection */}
          <Route path="/about" element={<Navigate to="/about-us" />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
