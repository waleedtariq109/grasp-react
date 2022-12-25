import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>This is About Page</h1>
      <h2>Here's the list of our employee</h2>
      <ul>
        <li>
          <Link to="/users/waleed">Waleed</Link>
        </li>
        <li>
          <Link to="/users/ahmed">Ahmed</Link>
        </li>
        <li>
          <Link to="/users/umair">Umair</Link>
        </li>
      </ul>
    </>
  );
};

export default About;
