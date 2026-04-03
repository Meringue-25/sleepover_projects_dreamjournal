"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export const NewDreamEntry = () => {
  const utils = api.useUtils();

  const { mutate: newDream, status } = api.dream.new.useMutation({
    onMutate: () => {
      setLabel("");
    },
    onSuccess: async () => {
      await utils.dream.getAll.invalidate();
    },
  });
  const [label, setLabel] = useState("");
  return (
    <div className="justfiy-center flex items-center gap-4">
      <input
        className="border-accent-400 rounded-xl border p-4"
        value={label}
        onChange={(e) => {
          setLabel(e.target.value);
        }}
      />
      <button
        disabled={status === "pending"}
        className="bg-primary-500 rounded-xl p-2"
        onClick={() => newDream({ label })}
      >
        NewDreamEntry
      </button>
    </div>
  );
};
