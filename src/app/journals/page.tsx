import Image from "next/image";
import { redirect } from "next/navigation";
import DreamListView from "~/components/DreamListView";
import Navbar from "~/components/Navbar";
import { NewDreamEntry } from "~/components/NewDreamEntry";
import { auth } from "~/server/auth";

const HomePage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="flex items-center p-8 text-6xl">
          <span>Welcome back,</span>
          {session.user.image && (
            <Image
              className="m-4 size-20 rounded-full shadow"
              alt={session.user.name || "blank image"}
              src={session.user.image}
              width={100}
              height={100}
            />
          )}
          <span>{session.user.name}</span>
        </h1>
      </div>
      <NewDreamEntry />
      <DreamListView />
    </>
  );
};

export default HomePage;
