import { redirect } from "next/navigation";
import EditDream from "~/components/EditDream";
import Navbar from "~/components/Navbar";
import { api, HydrateClient } from "~/trpc/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ViewJournal = async ({ params }: Props) => {
  const { id } = await params;
  const journal = await api.dream.get({ id }).catch(() => {});
  console.log(journal);
  if (!journal) {
    // Invalid journal id
    return redirect("/journals");
  }
  await api.dream.get.prefetch({ id });
  return (
    <>
      <Navbar />
      <HydrateClient>
        <EditDream id={id} />
      </HydrateClient>
    </>
  );
};

export default ViewJournal;
