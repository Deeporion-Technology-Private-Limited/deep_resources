import { Box } from "@/components";
import ProgressBar from "@/components/ProgressBar";
import { variants } from "@/components/ProgressBar/type";
import { cva } from "class-variance-authority";
import { StarIcon } from "../RatingCard/ReviewCardIcon/icon";

type RatingcardProp = {
  ratingDetails: any;
};

const calculateAverageRating = (ratingDetails: any) => {
  const totalRating =
    5 * ratingDetails.count1 +
    4 * ratingDetails.count2 +
    3 * ratingDetails.count3 +
    2 * ratingDetails.count4 +
    1 * ratingDetails.count5;
  const totalCount =
    ratingDetails.count1 +
    ratingDetails.count2 +
    ratingDetails.count3 +
    ratingDetails.count4 +
    ratingDetails.count5;

  return totalRating / totalCount;
};

export const Ratingcard = ({ ratingDetails }: RatingcardProp) => {
  const totalCount =
    ratingDetails.count1 +
    ratingDetails.count2 +
    ratingDetails.count3 +
    ratingDetails.count4 +
    ratingDetails.count5;
  const starStyles = cva(
    "flex justify-center mb-2 mt-5 h-full w-fit px-2 text-yellow-500"
  );

  const averageRating = calculateAverageRating(ratingDetails);
  const totalRating = isNaN(averageRating) ? "0" : averageRating.toFixed(1);

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex gap-2 px-5 py-5">
            <div>
              <h1 className="text-lg md:text-2xl">{totalRating}</h1>
            </div>
            <div>
              <h1 className="font-thin mt-2 text-sm md:text-base">{`${totalCount}Reviews`}</h1>
            </div>
          </div>
          <Box className={starStyles()}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-5 h-5 md:w-7 md:h-7 ${i < averageRating ? "text-yellow-500" : "text-gray-300"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </Box>
        </div>
        <div>
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div className="flex flex-col md:flex-row gap-5 px-4" key={index}>
              <div className="flex items-center justify-center gap-1">
                {rating} <StarIcon />
              </div>
              <div className="pt-2 w-full">
                <ProgressBar
                  progress={ratingDetails[`count${6 - rating}`]}
                  variant={variants.linear}
                  bgColor="#3F271E"
                  className="w-full  h-2 rounded-full"
                  textColor="blue"
                  middleText={false}
                />
              </div>
              <div>{ratingDetails[`count${6 - rating}`]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ratingcard;
