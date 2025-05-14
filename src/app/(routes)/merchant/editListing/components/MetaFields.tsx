import React from "react";

interface MetaFieldsProps {
  metaTitle: string;
  setMetaTitle: (v: string) => void;
  metaDescription: string;
  setMetaDescription: (v: string) => void;
  metaSchema: string[];
  setMetaSchema: (v: string[]) => void;
}

const MetaFields: React.FC<MetaFieldsProps> = ({ metaTitle, setMetaTitle, metaDescription, setMetaDescription, metaSchema, setMetaSchema }) => {
  const handleSchemaChange = (idx: number, value: string) => {
    const updated = [...metaSchema];
    updated[idx] = value;
    setMetaSchema(updated);
  };
  const handleAddSchema = () => setMetaSchema([...metaSchema, ""]);
  const handleRemoveSchema = (idx: number) => setMetaSchema(metaSchema.filter((_, i) => i !== idx));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
        <input
          type="text"
          value={metaTitle}
          onChange={e => setMetaTitle(e.target.value)}
          placeholder="Enter meta title"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
        <textarea
          value={metaDescription}
          onChange={e => setMetaDescription(e.target.value)}
          placeholder="Enter meta description"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Schema</label>
        <div className="space-y-2">
          {metaSchema.map((schema, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <input
                type="text"
                value={schema}
                onChange={e => handleSchemaChange(idx, e.target.value)}
                placeholder={`Meta schema #${idx + 1}`}
                className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
              <button type="button" onClick={() => handleRemoveSchema(idx)} className="text-red-600 hover:text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSchema} className="mt-2 text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Add Meta Schema
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetaFields;
