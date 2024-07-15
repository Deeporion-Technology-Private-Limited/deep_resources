import React from "react";
import ReviewItem from "./ReviewItem";
import { buttons, reviews } from "./ProductDetailsData";
import Accordion from "@/components/Accordion";
import { UpCursor } from "@/components/Accordion/Icon/Icon";
import { AccordionTypes } from "@/components/types";
import { Button } from "@/components";

const ReviewList: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          rating={review.rating}
          date={review.date}
          title={review.title}
          content={review.content}
        />
      ))}
      <div className="flex items-center justify-between w-full mb-4 border-none">
        <p className="text-[#7D5D4F] font-medium flex items-center gap-2 border-none">
          <Accordion
            Icon={<UpCursor />}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            variant={AccordionTypes.Cursor}
          >
						{buttons.viewReviews}
          </Accordion>
        </p>
      </div>
			<div>
			<Button
            className="flex-1 py-2 rounded-lg mr-2 flex justify-center items-center gap-2"
            style={{
              background: "linear-gradient(to right, #BFA59A, #3F271E)",
            }}
          >
            <p className="text-white text-base font-semibold inline-block ml-2">
              {buttons.review}
            </p>
          </Button>
			</div>
    </div>
  );
};

export default ReviewList;
