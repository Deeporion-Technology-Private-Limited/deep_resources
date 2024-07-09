import React from "react";

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
  <div className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}>
    <img
      src={
        "https://deepresources.s3.ap-south-1.amazonaws.com/images/StarRate.svg"
      }
      alt="star"
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      style={{ color: "red" }}
    />
  </div>
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
