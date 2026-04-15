import Navbar from "~/components/Navbar";
import { api } from "~/trpc/server";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20 mt-10 flex flex-col text-xl">
        <h1 className="text-4xl">Welcome to Yuki's Dream Journal Website!!</h1>
        <span>
          This is for you to log your dreams. In order to log your dreams, you
          <br />
          have to sign in with discord. At the top of the page you can find a
          <br />
          "Sign In" button. After that you should see a "Journal" button. If you
          <br />
          click that you will be able to start typing a title for your dream,
          <br />
          click the create button and start typing your dream! Don't forget to
          save it!
        </span>
      </div>
    </>
  );
};

export default HomePage;
