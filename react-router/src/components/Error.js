import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404</h1>
      <p>Page Not Found!</p>
      <Link to="/">Go Back to Home</Link>
    </>
  );
};

export default Error;
