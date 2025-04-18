"use client";

const TaxInfo = () => {
  return (
    <>
      <h1 className="text-xl font-semibold text-gray-800">Select a method to verify your tax information</h1>
      <p className="text-sm text-gray-600 mt-1">
        Providing the correct tax information is required to activate your campaign
      </p>

      <div className="mt-4">
        <label htmlFor="vat-registration" className="block text-sm font-medium text-gray-700">
          VAT Registration Number (Optional)
        </label>
        <input
          type="text"
          id="vat-registration"
          placeholder="Example: GB213562230"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Next
        </button>
      </div>
    </>
  );
};

export default TaxInfo;

