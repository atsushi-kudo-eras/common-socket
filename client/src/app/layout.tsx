import type { NextPage } from "next";
import Hello from "../components/Hello";
import "../styles/style.scss";

const Home: NextPage = () => {
  return (
    <>
      <Hello />
    </>
  );
};

export default Home;
