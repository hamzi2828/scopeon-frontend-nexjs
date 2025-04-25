"use client";

import React, { useRef, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor with no SSR
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

type DescriptionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

const Description = ({ value, onChange, placeholder = "Enter a description..." }: DescriptionProps) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder,
    }),
    [placeholder]
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Description</h2>
      <JoditEditor
        className="my-5"
        ref={editor}
        value={value}
        config={config}
        tabIndex={1}
        onBlur={onChange}
        onChange={onChange}
      />
    </div>
  );
};

export default Description;