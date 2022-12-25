import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  return (
    <>
      <h1>Here's all the information about {name}</h1>
    </>
  );
};

export default User;
