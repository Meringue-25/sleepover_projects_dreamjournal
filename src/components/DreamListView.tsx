"use client";

import Link from "next/link";
import { api } from "~/trpc/react";

type Props = {};

const DreamListView = ({}: Props) => {
  const { data: dreams, status } = api.dream.getAll.useQuery();

  return (
    <div>
      {status === "pending" ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="flex flex-wrap gap-4">
          {dreams?.map((d) => (
            <Link
              href={`/journals/${d.id}`}
              key={d.id}
              className="rounded-xl border p-2 text-xl"
            >
              {d.label}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DreamListView;
