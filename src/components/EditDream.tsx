"use client";

import { utils } from "prettier/doc.js";
import { api } from "~/trpc/react";

type Props = {
  id: string;
};

export const EditDream = ({ id }: Props) => {
  const { data: dream } = api.dream.get.useQuery({ id });
  const utils = api.useUtils();

  const { mutate: update, status: updateStatus } = api.dream.update.useMutation(
    {
      onSuccess: () => {
        utils.dream.getAll.invalidate();
      },
    },
  );

  return (
    <div>
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
      <button
        className="rounded-xl bg-pink-200 p-4"
        onClick={() => {
          if (!dream) {
            return;
          }

          update(dream);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditDream;
