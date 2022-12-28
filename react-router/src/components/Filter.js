import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const age = searchParams.get("age");
  const city = searchParams.get("city");

  return (
    <>
      <h1>This is Filter Page</h1>
      <p>City: {city}</p>
      <p>Age: {age}</p>
    </>
  );
};

export default Filter;
