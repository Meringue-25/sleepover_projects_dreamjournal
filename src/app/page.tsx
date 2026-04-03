import { api } from "~/trpc/server";

const HomePage = () => {
  const greeting = api.dream.greet({
    person: "Yuki",  
  })
  return <div>{greeting}</div>;
};

export default HomePage;
