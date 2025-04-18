"use client";

const MerchantVoucher = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-gray-900">Let customers know how to redeem their vouchers.</h2>
      <p className="mt-2 text-gray-700">
        Select one method of redemption and let customers know if they need to make an appointment in advance. This information will be added to your campaign.
      </p>
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="redeem" className="form-radio text-green-500" />
          <span>Redeem at Location</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input type="radio" name="redeem" className="form-radio text-green-500" />
          <span>Redeem Online</span>
        </label>
      </div>
      <p className="text-gray-600 text-sm mt-2">
        This number will be shown on your campaign page and vouchers. Customers will call this number to make their appointment.
      </p>
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">Previous</button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">Next</button>
      </div>
    </div>
  );
};

export default MerchantVoucher;

