import React from "react";

const ListingDescription = ({ description }: { description?: string }) => {
  if (!description) return null;
  return (
    <div className="my-4 p-4 bg-gray-50 border-l-4 border-gray-400 rounded">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Description</h2>
      <div className="text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ListingDescription;
