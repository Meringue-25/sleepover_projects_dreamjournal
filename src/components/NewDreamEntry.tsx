"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { Button } from "./Button";

export const NewDreamEntry = () => {
  const utils = api.useUtils();
  const router = useRouter();

  const { mutate: newDream, status } = api.dream.new.useMutation({
    onMutate: () => {
      setLabel("");
    },
    onSuccess: async (createdDream) => {
      await utils.dream.getAll.invalidate();
      router.push(`/journals/${createdDream.id}`);
    },
  });
  const [label, setLabel] = useState("");
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <input
        className="border-accent-400 rounded-xl border p-4"
        value={label}
        onChange={(e) => {
          setLabel(e.target.value);
        }}
      />
      <Button
        disabled={status === "pending"}
        onClick={() => newDream({ label })}
      >
        NewDreamEntry
      </Button>
    </div>
  );
};
