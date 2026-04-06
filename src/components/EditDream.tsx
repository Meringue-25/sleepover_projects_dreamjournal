"use client";

import { useRouter } from "next/navigation";
import { utils } from "prettier/doc.js";
import { api } from "~/trpc/react";
import { Button } from "./Button";

type Props = {
  id: string;
};

export const EditDream = ({ id }: Props) => {
  const { data: dream } = api.dream.get.useQuery({ id });
  const utils = api.useUtils();
  const router = useRouter();
  const { mutate: deleteDream } = api.dream.delete.useMutation({
    onSuccess: () => {
      utils.dream.getAll.invalidate();
    },
  });

  const { mutate: update, status: updateStatus } = api.dream.update.useMutation(
    {
      onSuccess: () => {
        utils.dream.getAll.invalidate();
      },
    },
  );

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={dream?.label}
        onChange={(e) => {
          if (dream === undefined || dream === null) {
            return;
          }

          utils.dream.get.setData({ id }, { ...dream, label: e.target.value });
        }}
      />
      <textarea
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

          utils.dream.get.setData({ id }, { ...dream, entry: e.target.value });
        }}
      ></textarea>
      <Button
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4"
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
