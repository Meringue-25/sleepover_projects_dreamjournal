import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

type Props = {
    params: {
        id: string;
    }
}

const ViewJournal = async ({ params}: Props) => {
    const { id } = await params;
    const journal = await api.dream.get({ id });
    
    if (journal === null ) {
        // Invalid journal id
        return redirect("/journals")
    }

    return (
    <pre>{JSON.stringify(journal, null, 2)}</pre>
  )
}

export default ViewJournal