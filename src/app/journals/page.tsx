import DreamListView from "~/components/DreamListView";
import Navbar from "~/components/Navbar";
import { NewDreamEntry } from "~/components/NewDreamEntry";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <NewDreamEntry />
      <DreamListView />
    </>
  );
};

export default HomePage;
