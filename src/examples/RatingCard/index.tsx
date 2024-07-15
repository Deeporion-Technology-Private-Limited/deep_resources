import { Box, FaverateCard, ProgressBar } from "@/components"
import { variants } from "@/components/types";
import { cva } from "class-variance-authority";
import { StarIcon } from "./ReviewCardIcon/icon";
import { Elevation } from "@/components";

type RatingcardProp = {
    objData: any
}

const calculateAverageRating = (objData: any) => {
    const totalRating = 5 * objData.count1 + 4 * objData.count2 + 3 * objData.count3 + 2 * objData.count4 + 1 * objData.count5;
    const totalCount = objData.count1 + objData.count2 + objData.count3 + objData.count4 + objData.count5;
    
    return totalRating / totalCount;
}

export const Ratingcard = ({ objData }: RatingcardProp) => {

  const totalCount = objData.count1 + objData.count2 + objData.count3 + objData.count4 + objData.count5;
    const starStyles = cva(
        "flex justify-center mb-2 mt-5 h-full w-fit px-2 text-yellow-500"
    );

    const averageRating = calculateAverageRating(objData);
    const totalRating = isNaN(averageRating) ? '0' : averageRating.toFixed(1)
    

    return (
        <>
            <Elevation className="w-full h-fit py-4 px-4">
                <div>
                    <div className="flex flex-col md:flex-row w-full py-5 px-5 gap-7 h-fit">
                        <FaverateCard
                            className="w-full md:w-1/5 h-fit rounded-md"
                            imageSrc={objData.imageUrl}
                            isDescription={false}
                        />
                        <div className="w-full md:w-fit h-fit font-bold py-2 text-3xl">
                            <h1 className="text-lg md:text-3xl">{objData.cardHeading}</h1>
                            <span className="font-[100] font-serif text-sm md:text-base">{objData.cardTittle}</span>
                        </div>
                    </div>
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
                                    className={`w-5 h-5 md:w-7 md:h-7 ${i < averageRating ? 'text-yellow-500' : 'text-gray-300'}`}
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
                                        progress={objData[`count${6 - rating}`]}
                                        variant={variants.linear}
                                        bgColor="#3F271E"
                                        className="w-full  h-2 rounded-full"
                                        textColor="blue"
                                        middleText={false}
                                    />
                                </div>
                                <div>
                                    {objData[`count${6 - rating}`]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Elevation>
        </>
    )
}

export default Ratingcard;
