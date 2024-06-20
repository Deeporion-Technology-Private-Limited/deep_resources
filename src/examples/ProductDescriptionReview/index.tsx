import { Box, Headings } from "@/components";
import AutoComplete from "@/components/AutoComplete";
import ThumbsUp from "../../images/ThumbUp.svg";
import ThumbsDown from "../../images/ThumbDown.svg";
import {
  DescriptionReview,
  DescriptionReviewSingleCard,
} from "@/components/Data/ProductDescriptionReview";
import Ratingcard from "../RatingCard";

export const ProductDescriptionReview = () => {
  const { reviewDetails } = DescriptionReview;

  const ThumbUp = (data: any) => {
    alert(`${data.heading} Thumbs up Button Clicked`);
  };
  const ThumbDown = (data: any) => {
    alert(`${data.heading} Thumbs down Button Clicked`);
  };
  return (
    <Box className="flex w-full p-4 justify-between ">
      <Box className="w-1/3">
        <Ratingcard objData={DescriptionReviewSingleCard.objectData} />
      </Box>
      <Box
        className="shadow-lg px-4 py-4  box box-border border rounded-md"
        style={{ width: "65%" }}
      >
        <Box className="flex justify-between items-center">
          <Headings
            fontWeight="font-normal"
            text={`${reviewDetails.length} Reviews`}
            style={{ color: "#72787F", fontSize: "14px" }}
          />

          <Box className="w-1/4">
            <AutoComplete
              placeholder="All Stars"
              suggestions={["0-1", "1-2", "2-3", "3-4", "4-5"]}
              type="text"
              style={{ border: "none", width: "40%" }}
              className="font-bold"
            />
          </Box>
        </Box>
        {reviewDetails &&
          reviewDetails.map((data, index) => {
            return (
              <Box className="border-t-2" key={index}>
                <Box>
                  <Box className="flex justify-between my-3">
                    <Box className="flex justify-center items-center  h-fit  text-yellow-500 bg-yellow">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < 5 ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={
                            i < data.rating
                              ? "text-yellow-500 w-5 h-5"
                              : "text-gray-300 w-5 h-5"
                          }
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                      <span style={{ color: "#72787F", marginLeft: "10px" }}>
                        <Headings
                          fontWeight={"font-semibold"}
                          text={`${data.rating}`}
                        />
                      </span>
                    </Box>

                    <Headings
                      fontWeight={"font-normal"}
                      style={{ color: "#72787F", fontSize: "12px" }}
                      text={`${data.days} days ago`}
                    />
                  </Box>
                  <Headings
                    FontSize="text-xl"
                    fontWeight="font-bold"
                    text={data.heading}
                  />
                  <Headings
                    fontWeight={"font-normal"}
                    FontSize={"text-base"}
                    text={data.contents}
                  />
                  <Box className="flex my-3">
                    <p className="mr-2 text-[#72787F] text-xs font-normal flex">
                      <span>
                        <img
                          onClick={() => ThumbUp(data)}
                          src={ThumbsUp}
                          alt="ThumbsUp"
                        />{" "}
                      </span>
                      &nbsp; Helpful ({data.helpFull})
                    </p>
                    <p className="ml-2 text-[#72787F] text-xs font-normal flex">
                      <span>
                        <img
                          onClick={() => ThumbDown(data)}
                          src={ThumbsDown}
                          alt="ThumbsDown"
                        />
                      </span>{" "}
                      &nbsp;Not helpful ({data.notHelpfull})
                    </p>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
