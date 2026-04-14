"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "./Button";
import { useState } from "react";
import { CloudCheck, CloudOff, CloudSync } from "lucide-react";

type Props = {
  id: string;
};

export const EditDream = ({ id }: Props) => {
  const { data: dream } = api.dream.get.useQuery({ id });
  const utils = api.useUtils();
  const router = useRouter();
  const [synced, setSynced] = useState(true);
  const { mutate: deleteDream } = api.dream.delete.useMutation({
    onSuccess: () => {
      utils.dream.getAll.invalidate();
    },
  });

  const { mutate: update, status: updateStatus } = api.dream.update.useMutation(
    {
      onSuccess: () => {
        utils.dream.getAll.invalidate();
        setSynced(true);
      },
    },
  );

  return (
    <div className="bg-background-100/50 mx-auto mt-10 flex w-3/5 flex-col gap-4 rounded-2xl p-8">
      <span className="text-text-600">
        {updateStatus === "pending" ? (
          <CloudSync size={20} />
        ) : synced ? (
          <CloudCheck size={20} />
        ) : (
          <CloudOff size={20} />
        )}
      </span>

      <input
        type="text"
        className="border-accent-300 rounded border p-1"
        value={dream?.label}
        onChange={(e) => {
          if (dream === undefined || dream === null) {
            return;
          }
          setSynced(false);
          utils.dream.get.setData({ id }, { ...dream, label: e.target.value });
        }}
      />
      <textarea
        className="border-accent-300 rounded border p-1"
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Write your dream..."
        value={dream?.entry}
        onChange={(e) => {
          if (dream === undefined || dream === null) {
            return;
          }
          setSynced(false);
          utils.dream.get.setData({ id }, { ...dream, entry: e.target.value });
        }}
      ></textarea>
      <Button
        disabled={updateStatus === "pending"}
        onClick={() => {
          if (!dream) {
            return;
          }

          update(dream);
        }}
      >
        Save
      </Button>
      <div
        id="confirm-delete"
        popover="auto"
        className="bg-background-100 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl p-4"
      >
        <Button
          onClick={() => {
            if (!dream) return;
            deleteDream({ id: dream.id });
            router.push("/journals");
          }}
        >
          Confirm Delete
        </Button>
      </div>
      <button popoverTarget="confirm-delete">Delete</button>
    </div>
  );
};

export default EditDream;
