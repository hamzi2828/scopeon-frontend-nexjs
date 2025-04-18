"use client";

// import { FaUpload } from "react-icons/fa";

const MerchantPhotos = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">Which photos would you like to use?</h2>
        <div className="flex items-center mb-4">
          <input type="radio" id="my-photo" name="photo-option" className="form-radio text-green-600" />
          <label htmlFor="my-photo" className="ml-2 text-gray-800">Use my own photo(s)</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="stock-photo" name="photo-option" className="form-radio text-green-600" />
          <label htmlFor="stock-photo" className="ml-2 text-gray-800">Choose a stock photo</label>
        </div>
        {/* More UI and logic can be added here */}
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">Previous</button>
          <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">Next</button>
        </div>
      </div>
    </>
  );
};

export default MerchantPhotos;

