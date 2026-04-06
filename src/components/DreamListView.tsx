"use client";

import Link from "next/link";
import { api } from "~/trpc/react";

type Props = {};

const DreamListView = ({}: Props) => {
  const { data: dreams, status } = api.dream.getAll.useQuery();

  return (
    <div className="mx-auto mt-4 w-3/5">
      {status === "pending" ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="flex flex-wrap gap-4">
          {dreams?.map((d) => (
            <Link
              href={`/journals/${d.id}`}
              key={d.id}
              className="border-text-500/50 flex flex-col gap-1 rounded-xl border p-4 text-3xl shadow-xl"
            >
              <span>{d.label}</span>
              <span className="text-base opacity-50">
                {d.createdAt.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  year: "numeric",
                })}
              </span>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DreamListView;
