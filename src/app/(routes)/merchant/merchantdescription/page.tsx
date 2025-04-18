"use client";

const MerchantDescription = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">What&apos;s included in each option?</h2>
      <p className="text-gray-600 mb-4">Briefly describe the highlights of your business and campaign in 1–2 sentences.</p>
      {/* Placeholder for JoditEditor */}
      <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md" placeholder="Start typing..."></textarea>
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">Previous</button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">Next</button>
      </div>
    </div>
  );
};

export default MerchantDescription;

