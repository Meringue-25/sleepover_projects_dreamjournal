"use client";

import { api } from "~/trpc/react";

type Props = {
  id: string;
};

export const EditDream = ({ id }: Props) => {
  const { data: dream } = api.dream.get.useQuery({ id });
  return (
    <div>
      <h1>{dream?.label}</h1>
    </div>
  );
};

export default EditDream;
