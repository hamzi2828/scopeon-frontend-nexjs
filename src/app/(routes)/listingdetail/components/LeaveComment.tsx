import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaStar } from "react-icons/fa";
import { submitReview } from "../service/listingDetailService";

interface LeaveCommentProps {
  listingId: string;
}

const ratingFields = [
  { label: "Flexibility", key: "flexibility" },
  { label: "Quality Service", key: "qualityService" },
  { label: "Value Of Money", key: "valueOfMoney" },
  { label: "Cleanliness", key: "cleanliness" },
];

const LeaveComment: React.FC<LeaveCommentProps> = ({ listingId }) => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle rating change
  const handleRating = (field: string, value: number) => {
    setRatings((prev) => ({ ...prev, [field]: value }));
  };

  // Handle file input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setPhotos(filesArray);
      setPhotoUrls(filesArray.map((file) => file.name));
    }
  };



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Check if all rating fields are filled
    const missingRatings = ratingFields.filter(
      (field) => ratings[field.key] === undefined || ratings[field.key] === 0
    );
    if (missingRatings.length > 0) {
      setError("Please provide a rating for all categories.");
      return;
    }

    setLoading(true);
    try {
      // Prepare FormData for multipart/form-data upload
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('flexibility', String(ratings.flexibility || 0));
      formData.append('qualityService', String(ratings.qualityService || 0));
      formData.append('valueOfMoney', String(ratings.valueOfMoney || 0));
      formData.append('cleanliness', String(ratings.cleanliness || 0));
      formData.append('reviewText', reviewText);
      photos.forEach((file) => formData.append('photoUrls', file));
      await submitReview(listingId, formData);

      setSuccess("Review submitted successfully!");
      setName("");
      setEmail("");
      setReviewText("");
      setPhotos([]);
      setPhotoUrls([]);
      setRatings({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to submit review");
      } else {
        setError("Failed to submit review");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4">
      <form className="p-4 border rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5 className="text-xl font-semibold text-black relative inline-block">
            Leave Your Review
            <span className="block h-1 bg-orange-500 w-28 mt-1"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="space-y-4">
          {ratingFields.map((field) => (
            <div className="flex items-center" key={field.key}>
              <span className="w-40">{field.label}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      "w-4 h-4 cursor-pointer " +
                      (ratings[field.key] && ratings[field.key] > i
                        ? "text-yellow-500"
                        : "text-gray-300")
                    }
                    onClick={() => handleRating(field.key, i + 1)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 mt-5">
          <input
            type="text"
            placeholder="User Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <textarea
            placeholder="Write Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 h-32 resize-none"
          ></textarea>
          <div className="flex items-center">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="flex-grow p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            {photoUrls.length > 0 && (
              <span className="ml-2 text-sm text-gray-600">
                {photoUrls.join(", ")}
              </span>
            )}
          </div>
        </div>
        {success && <div className="text-green-600 mt-2">{success}</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
        <button
          type="submit"
          className="w-52 mt-4 bg-transparent text-orange-600 border border-orange-600 py-2 rounded-md hover:bg-orange-600 hover:text-white focus:outline-none"
          disabled={loading}
        >
          {loading ? "Submitting..." : "SUBMIT REVIEW"}
        </button>
      </form>
    </div>
  );
};

export default LeaveComment;
