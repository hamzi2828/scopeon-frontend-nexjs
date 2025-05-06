import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaCheckCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

interface Review {
  _id?: string;
  name: string;
  email?: string;
  flexibility?: number;
  qualityService?: number;
  valueOfMoney?: number;
  cleanliness?: number;
  reviewText?: string;
  photoUrl?: string;
  photoUrls?: string[];
  createdAt?: string;
  // For dummy data compatibility
  id?: number;
  date?: string;
  rating?: number;
  text?: string;
  images?: string[];
  helpful?: number;
  notHelpful?: number;
}

const dummyReviews: Review[] = [
  {
    id: 1,
    name: "John Doe", 
    date: "12 June, 2027",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec",
    images: [
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-1.jpg",
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-2.jpg",
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-3.jpg",
    ],
    helpful: 12,
    notHelpful: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "15 June, 2027",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec",
    images: [
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-1.jpg",
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-2.jpg",
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/food-3.jpg",
    ],
    helpful: 8,
    notHelpful: 1,
  },
];

interface ListingReviewsProps {
  reviews?: Review[];
}

const ListingReviews: React.FC<ListingReviewsProps> = ({ reviews }) => {
  const displayReviews = (reviews && reviews.length > 0) ? reviews : dummyReviews;

  return (
    <Swiper
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {displayReviews.map((review) => (
        <SwiperSlide key={review.id || review._id}>
          <div className="m-4">
            <div className="bg-white p-6 rounded-lg border w-full">
              {/* User Info */}
              <div className="flex items-center mb-4">
                <Image
                  src={review.photoUrl || "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/meta/img-1.png"}
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h5 className="font-semibold text-lg text-gray-900 mr-2">
                      {review.name}
                    </h5>
                    <FaCheckCircle className="text-green-500" />
                  </div>
                  <p className="text-gray-600 text-sm">{review.date}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating ?? review.qualityService ?? 0)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">{review.reviewText || review.text}</p>

              {/* Review Images */}
              {review.photoUrls && review.photoUrls.length > 0 && (
                <div className="flex mt-2 space-x-2">
                  {review.photoUrls.map((imgUrl: string, idx: number) => (
                    <Image
                      key={idx}
                      src={
                        imgUrl.startsWith("http")
                          ? imgUrl
                          : `${process.env.NEXT_PUBLIC_API_BASE_URL}${imgUrl}`
                      }
                      alt="Review photo"
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded"
                    />
                  ))}
                </div>
              )}
              {/* Fallback for dummy data */}
              {review.images && review.images.length > 0 && !review.photoUrls && (
                <div className="flex mt-2 space-x-2">
                  {review.images.map((imgUrl, idx) => (
                    <Image
                      key={idx}
                      src={imgUrl}
                      alt="Review photo"
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded"
                    />
                  ))}
                </div>
              )}

              {/* Helpful / Not Helpful */}
              <div className="flex space-x-4">
                <button className="flex items-center text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
                  <FaThumbsUp className="w-4 h-4 mr-1 text-gray-700" />
                  helpful {review.helpful}
                </button>
                <button className="flex items-center text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
                  <FaThumbsDown className="w-4 h-4 mr-1 text-gray-700" />
                  not helpful {review.notHelpful}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ListingReviews;
