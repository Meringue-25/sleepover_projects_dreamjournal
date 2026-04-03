'use client'

import { useState } from "react";
import { api } from "~/trpc/react";

export const NewDreamEntry = () => {
    const { mutate: newDream } = api.dream.new.useMutation();
    const [label, setLabel] = useState("");
    return (
    <div className="flex gap-4 items-center justfiy-center">
    <input 
        className="border-accent-400 rounded-xl border p-4"
        value={label} 
        onChange={(e) => {
        setLabel(e.target.value);
        }}
    />
        <button 
            className="bg-primary-500 rounded-xl p-2"
            onClick={() => newDream({ label: ""})}
            >NewDreamEntry</button>;
    </div>
  )
}