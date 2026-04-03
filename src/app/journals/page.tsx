import Navbar from "~/components/Navbar";
import { api } from "~/trpc/server";

const HomePage = () => {
  const greeting = api.dream.greet({
    person: "Yuki",  
  })

  return (
    <>
      <Navbar />
      <h1>Journals!</h1>
    <span>{greeting}</span>
    </>
  );
};

export default HomePage;
