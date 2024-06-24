import React from "react";

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.155a1 1 0 00.95.691h4.357c.969 0 1.371 1.24.588 1.81l-3.53 2.566a1 1 0 00-.364 1.118l1.357 4.155c.3.921-.755 1.688-1.54 1.118l-3.53-2.566a1 1 0 00-1.176 0l-3.53 2.566c-.784.57-1.84-.197-1.54-1.118l1.357-4.155a1 1 0 00-.364-1.118L2.09 9.583c-.784-.57-.38-1.81.588-1.81h4.357a1 1 0 00.95-.691l1.357-4.155z" />
  </svg>
);

const ReviewItem: React.FC<ReviewItem> = ({ rating, date, title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
          <span className="ml-2 font-bold text-gray-800">{rating}.0</span>
        </div>
        <span className="text-[#72787F] font-normal text-sm">{date}</span>
      </div>
      <h3 className="mt-2 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-[#26282B] font-normal text-sm">{content}</p>
    </div>
  );
};

export default ReviewItem;
