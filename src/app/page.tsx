import Navbar from "~/components/Navbar";
import { api } from "~/trpc/server";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20 mt-10 flex flex-col text-xl">
        <h1 className="text-4xl">Welcome to Yuki's Dream Journal Website!!</h1>
        <span>This is for you to log your dreams.</span>
      </div>
    </>
  );
};

export default HomePage;
