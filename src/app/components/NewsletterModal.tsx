// NewsletterModal.tsx
import React from 'react';

interface NewsletterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-green-50 p-6 rounded-lg w-full max-w-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">Sign Up!</h2>
        <p className="text-center text-lg font-semibold text-gray-800">
          Get up to 15% Extra Off Your First Deal*
        </p>
        <p className="text-center text-gray-800 mb-4">
          Use code <span className="font-bold text-green-600">WELCOME</span> at checkout for 15% Extra Off Local Deals
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />
        <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
          Continue
        </button>
        <p className="text-xs text-gray-600 text-center mt-4">
          You can change your email preferences at any time
        </p>
        <p className="text-xs text-gray-600 text-center mt-2">
          Yes, I want to save money by receiving personalised emails with awesome deals.
          By subscribing I agree to the <a href="#" className="text-blue-600 underline">Terms of Use</a> and have read the <a href="#" className="text-blue-600 underline">Privacy Statement</a>.
        </p>
        <a href="#" className="block text-center text-blue-600 mt-2 hover:underline" onClick={onClose}>No Thanks</a>
        <p className="text-xs text-gray-500 text-center mt-2">
          *Valid on max 1 deal chosen from the Local categories. New customers only. Max discount £50. Exclusions apply.
        </p>
      </div>
    </div>
  );
};

export default NewsletterModal;
