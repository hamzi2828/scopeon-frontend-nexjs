"use client";

import { useSearchParams } from "next/navigation";
import { listings } from "../../data/Data";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  FaStar,
  FaFireAlt,
  FaFire,
  FaClock,
  FaInfoCircle,
  FaGift,
  FaTag,
} from "react-icons/fa";
import ListingDetailSlider from "../../components/website/listingdetail/ListingDetailSlider";
import ListingAmenities from "../../components/website/listingdetail/ListingAmenities";
import ListingReviews from "../../components/website/listingdetail/ListingReviews";
import LeaveComment from "../../components/website/listingdetail/LeaveComment";

const spaOptions = [
  {
    id: "option1",
    title: "Spa Admission",
    originalPrice: "$45.00",
    discountedPrice: "$35.00",
    finalPrice: "$35.00",
    discountPercentage: "22% off",
    extraOffer: "Extra $3.78 off",
    finalDiscountedPrice: "$31.22",
    codeInfo: "with code HURRYNOW",
    purchaseInfo: "10,000+ bought",
    giftIcon: true,
  },
  {
    id: "option2",
    title: "Spa Admission + Massage",
    originalPrice: "$85.00",
    discountedPrice: "$65.00",
    finalPrice: "$65.00",
    discountPercentage: "24% off",
    extraOffer: "Extra $3.78 off",
    finalDiscountedPrice: "$61.22",
    codeInfo: "with code HURRYNOW",
    purchaseInfo: "5,000+ bought",
    giftIcon: true,
  },
];

export default function ListingDetailPage() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("id");

  const listing = listings.find((l) => l.id === Number(listingId));

  if (!listing) {
    return (
      <main>
        <NavBar />
        <div className="max-w-screen-xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Listing not found
          </h1>
        </div>
        <Footer />
      </main>
    );
  }

  const listingImages = [
    listing.imageUrl,
    "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-1.jpg",
    "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-2.jpg",
    "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-3.jpg",
  ];

  return (
    <main>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="md:col-span-2 col-span-3">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {listing.title}
              </h1>

              <div className="mt-4 flex items-center text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 9H9V7h12V2H3v20h9v-2H5V4h14v5zm-2 10l-5-5h3v-4h4v4h3l-5 5z"></path>
                  </svg>
                  <span className="text-sm">
                    {listing.title} (
                    <a href="#" className="text-orange-600">
                      {listing.address}
                    </a>
                    )
                  </span>
                </div>
                <span className="mx-2">|</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-1 text-sm">{listing.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">
                    (56,763 reviews)
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2 text-sm">
                <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                  <FaStar className="mr-1" /> Best Rated
                </span>
                <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 rounded">
                  <FaFireAlt className="mr-1" /> 10,000+ Bought
                </span>
                <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  <FaFire className="mr-1" />
                  Selling fast!
                </span>
              </div>
            </div>
            <ListingDetailSlider images={listingImages} />
            <ListingAmenities />
            <ListingReviews />
            <LeaveComment />
          </div>
          <div className="md:col-span-1 col-span-3">
            <div className="p-6">
              <div className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-lg shadow-md">
                <FaClock className="mr-2" />
                <span>Sale ends in 0 days 16:23:15</span>
              </div>
              <div className="border border-dashed border-purple-300 rounded-lg p-4 bg-purple-50 flex justify-between items-center my-3">
                <div className="flex items-center">
                  <FaTag className="text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Extra $3.78 off
                    </div>
                    <div className="text-sm text-gray-600">
                      Promo code{" "}
                      <span className="text-purple-600 font-semibold">
                        HURRYNOW
                      </span>{" "}
                      ends in <span className="font-bold">06:33:49</span>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-purple-600 text-sm font-medium hover:underline hidden"
                >
                  Apply
                </a>
              </div>
              <div className="flex items-center justify-between my-3">
                <label className="text-gray-700 font-semibold">
                  Select Option:
                </label>
                <div className="flex items-center">
                  <input type="checkbox" id="gift" className="mr-1" />
                  <label
                    htmlFor="gift"
                    className="text-gray-700 flex items-center"
                  >
                    Buy as a gift
                    <FaInfoCircle className="ml-1 text-gray-500" />
                  </label>
                </div>
              </div>
              <div className="p-3 bg-gray-200 rounded-lg">
                {spaOptions.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className="border border-blue-300 rounded-lg py-2 px-4 bg-white shadow-sm block cursor-pointer my-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="option"
                          id={option.id}
                          className="mr-2"
                        />
                        <span className="font-semibold text-gray-800">
                          {option.title}
                        </span>
                      </div>
                      {option.giftIcon && <FaGift className="text-gray-400" />}
                    </div>

                    <div>
                      <div className="flex items-center">
                        <span className="text-sm line-through text-gray-500 mr-2">
                          {option.originalPrice}
                        </span>
                        <span className="text-sm text-green-600 font-semibold">
                          {option.discountedPrice}
                        </span>
                      </div>
                    </div>

                    <div className="text-lg font-bold text-red-600">
                      {option.finalPrice}{" "}
                      <span className="text-sm text-gray-600">
                        {option.discountPercentage}
                      </span>
                    </div>

                    <div className="text-sm text-red-600">
                      {option.extraOffer}
                    </div>

                    <div className="text-sm text-purple-600">
                      {option.finalDiscountedPrice}{" "}
                      <span className="text-gray-600">{option.codeInfo}</span>
                    </div>

                    <div className="text-sm text-gray-500">
                      {option.purchaseInfo}
                    </div>
                  </label>
                ))}
              </div>
              <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300 mt-2">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
