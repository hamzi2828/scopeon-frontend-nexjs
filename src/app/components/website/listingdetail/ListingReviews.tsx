import React from "react";
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
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
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

const ListingReviews = () => {
  return (
    <Swiper
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="m-4">
            <div className="bg-white p-6 rounded-lg border w-full">
              {/* User Info */}
              <div className="flex items-center mb-4">
                <img
                  src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/meta/img-1.png"
                  alt="User Avatar"
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
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">{review.text}</p>

              {/* Review Images */}
              <div className="flex mb-4">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Review Image ${index + 1}`}
                    className="w-28 h-24 rounded-lg object-cover mr-2"
                  />
                ))}
              </div>

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
