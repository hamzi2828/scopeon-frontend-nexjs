"use client";

import { useSearchParams } from "next/navigation";
import { getListingById } from "./service/listingDetailService";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { 
  FaClock,
  FaInfoCircle,
  FaTag,
} from "react-icons/fa";
import CountdownTimer from "./components/CountdownTimer";
import ListingDetailSlider from "../../components/website/listingdetail/ListingDetailSlider";
import ListingAmenities from "./components/ListingAmenities";
import ListingReviews from "./components/ListingReviews";
import LeaveComment from "./components/LeaveComment";
import ListingHighlights from "./components/ListingHighlights";
import ListingDescription from "./components/ListingDescription";
import ListingHeader from "./components/ListingHeader";
import ListingDealOptions from "./components/ListingDealOptions";
import { Suspense } from "react";

// Only using the actual listing data, no hardcoded options

import { useEffect, useState } from "react";
interface DealOption {
  _id?: string;
  id?: string;
  title: string;
  originalPrice: string;
  discountedPrice?: string;
  finalPrice?: string;
  discountPercentage?: string;
  extraOffer?: string;
  finalDiscountedPrice?: string;
  codeInfo?: string;
  purchaseInfo?: string;
  giftIcon?: boolean;
}

interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;
  amenities?: string[];
  photos?: string[];
  isFeature?: boolean;
  startSaleDate?: string;
  endSaleDate?: string;
  promoCode?: string;
  promoDiscount?: number;
  promoType?: string;
  promoValidUntil?: string;
  address?: string;
  website?: string;
  phone?: string;
  rating?: number;
  imageUrl?: string;
  dealOptions?: DealOption[];
  reviews?: {
    _id?: string;
    name: string;
    email?: string;
    flexibility?: number;
    qualityService?: number;
    valueOfMoney?: number;
    cleanliness?: number;
    reviewText?: string;
    photoUrl?: string;
    createdAt?: string;
  }[];
  showBestRated?: boolean;
  showBought?: boolean;
  showSellingFast?: boolean;
}

const ListingDetailContent = () => {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("id");
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!listingId) return;
    setLoading(true);
    getListingById(listingId)
      .then((data) => {
        setListing(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setListing(null);
      })
      .finally(() => setLoading(false));
  }, [listingId]);

  if (loading) {
    return (
      <main>
        <NavBar />
        <div className="max-w-screen-xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Loading...</h1>
        </div>
        <Footer />
      </main>
    );
  }
  if (error || !listing) {
    return (
      <main>
        <NavBar />
        <div className="max-w-screen-xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            {error || "Listing not found"}
          </h1>
        </div>
        <Footer />
      </main>
    );
  }

  // Build image URLs from photos array
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
  const listingImages = (listing.photos && listing.photos.length > 0)
    ? listing.photos.map((photo: string) =>
        photo.startsWith("http") ? photo : `${API_BASE_URL}${photo}`
      )
    : ["https://via.placeholder.com/300x200"];

  return (
    <main>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="md:col-span-2 col-span-3">
            <ListingHeader 
              title={listing.title} 
              address={listing.address} 
              rating={listing.rating}
              showBestRated={listing.showBestRated}
              showBought={listing.showBought}
              showSellingFast={listing.showSellingFast}
            />
            <ListingDetailSlider images={listingImages} />
            <ListingAmenities amenities={listing.amenities} />
            <ListingHighlights highlights={listing.highlights} />
            <ListingDescription description={listing.description} />
            <ListingReviews reviews={listing?.reviews} />
            <LeaveComment listingId={listing._id} />
          </div>
          <div className="md:col-span-1 col-span-3">
            <div className="p-6">
              {listing.endSaleDate && (
                <div className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-lg shadow-md">
                  <FaClock className="mr-2" />
                  <span>Sale ends in <CountdownTimer targetDate={new Date(listing.endSaleDate)} /></span>
                </div>
              )}
              {listing.promoCode && listing.promoDiscount && listing.promoValidUntil && (
                <div className="border border-dashed border-purple-300 rounded-lg p-4 bg-purple-50 flex justify-between items-center my-3">
                  <div className="flex items-center">
                    <FaTag className="text-gray-500 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">
                        Extra {listing.promoType === 'percent' ? `${listing.promoDiscount}% off` : `RS ${listing.promoDiscount} off`}
                      </div>
                      <div className="text-sm text-gray-600">
                        Promo code{" "}
                        <span className="text-purple-600 font-semibold">
                          {listing.promoCode}
                        </span>{" "}
                        ends in <span className="font-bold"><CountdownTimer targetDate={new Date(listing.promoValidUntil)} /></span>
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
              )}
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
              <ListingDealOptions 
                dealOptions={listing.dealOptions} 
                promoCode={listing.promoCode}
                promoDiscount={listing.promoDiscount}
                promoType={listing.promoType}
              />
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
};

export default function ListingDetailPage() {
  return (
    <Suspense
      fallback={
        <main>
          <NavBar />
          <div className="max-w-screen-xl mx-auto py-20 text-center">
            <h1 className="text-3xl font-semibold text-gray-800">Loading...</h1>
          </div>
          <Footer />
        </main>
      }
    >
      <ListingDetailContent />
    </Suspense>
  );
}
