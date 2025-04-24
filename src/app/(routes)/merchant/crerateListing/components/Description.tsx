"use client";

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor with no SSR
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const Description = ({ placeholder = "Enter a description..." }: { placeholder?: string }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

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
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent: string) => setContent(newContent)}
        onChange={(newContent: string) => setContent(newContent)}
      />
    </div>
  );
};

export default Description;
