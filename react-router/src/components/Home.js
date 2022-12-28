import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home Page</h1>
      <button onClick={() => navigate("/about-us")}>About</button>
      <button onClick={() => navigate("/filter?age=10&city=multan")}>
        User
      </button>
    </>
  );
};

export default Home;
