import React from "react";

const ListingHighlights = ({ highlights }: { highlights?: string }) => {
  if (!highlights) return null;
  return (
    <div className="my-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
      <h2 className="text-lg font-semibold text-yellow-800 mb-1">Highlights</h2>
      <div className="text-gray-800 whitespace-pre-line">{highlights}</div>
    </div>
  );
};

export default ListingHighlights;
