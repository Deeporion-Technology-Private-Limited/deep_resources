import { Box } from "@/components"
import ProgressBar from "@/components/ProgressBar";
import { variants } from "@/components/ProgressBar/type";
import { cva } from "class-variance-authority";
import { StarIcon } from "./ReviewCardIcon/icon";
import { Elevation } from "@/components";
import FaverateCard from "@/components/Cards/FaverateCard";

type RatingcardProp = {
    objData : any
}


export const Ratingcard = ({objData} : RatingcardProp) => {

    const starStyles = cva(
        "flex justify-center  mb-2 mt-5  h-full w-fit h-full text-yellow-500 bg-yellow px-2"
      );

  
  return (
    <>
       <Elevation className="w-fit h-fit py-4 px-4">
       <div>
        <div className="flex  w-[500px] py-5 px-5 gap-7 h-fit">
        <FaverateCard
        className="w-[100px] h-[135px] rounded-md "
        imageSrc={objData.imageUrl}
                />
<div className="w-[300px] font-bold py-2 text-3xl">
<h1>{objData.cardHeading}</h1>
<span className="font-[100] font-serif">{objData.cardTittle}</span>
</div>

        </div>
        <div className="flex justify-between  w-full ">
            <div className="flex gap-2 px-5 py-5">
                <div>
                    <h1 className="text-2xl">{objData.totalRating}</h1>
                </div>
                <div>
                    <h1 className="font-thin mt-2">{objData.totalReview}</h1>
                </div>
            </div>
            <Box className={starStyles()}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill= "currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-yellow-500 w-7 h-7"     
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
        <div className="w-full">
       <div className="flex gap-5 px-4">
        <div className="flex items-center justify-center gap-1">
             5 <StarIcon/>  
        </div>
        <div className="pt-2">
        <ProgressBar   
        progress={objData.count1}
         variant={variants.linear}
          bgColor="#3F271E"
         className="w-[400px] h-2 rounded-full"
          textColor="blue"
         middleText={false}
          />
        </div>
        <div>
            {objData.count1}
        </div>
       </div>
       <div className="flex gap-5 px-4">
       <div className="flex items-center justify-center gap-1">
             4<StarIcon/>  
        </div>
        <div className="pt-2">
        <ProgressBar   
        progress={objData.count2}
         variant={variants.linear}
          bgColor="#3F271E"
         className="w-[400px] h-2 rounded-full"
          textColor="blue"
         middleText={false}
          />
        </div>
        <div>
            {objData.count2}
        </div>
       </div>
       <div className="flex gap-5 px-4">
       <div className="flex items-center justify-center gap-1">
             3 <StarIcon/>  
        </div>
        <div className="pt-2">
        <ProgressBar   
        progress={objData.count3}
         variant={variants.linear}
          bgColor="#3F271E"
         className="w-[400px] h-2 rounded-full"
          textColor="blue"
         middleText={false}
          />
        </div>
        <div>
            {objData.count3}
        </div>
       </div>
       <div className="flex gap-5 px-4">
       <div className="flex items-center justify-center gap-1">
             2<StarIcon/>  
        </div>
        <div className="pt-2">
        <ProgressBar   
        progress={objData.count4}
         variant={variants.linear}
          bgColor="#3F271E"
         className="w-[400px] h-2 rounded-full"
          textColor="blue"
         middleText={false}
          />
        </div>
        <div>
            {objData.count4}
        </div>
       </div>
       <div className="flex gap-5 px-4">
       <div className="flex items-center justify-center gap-1">
             1<StarIcon/>  
        </div>
        <div className="pt-2">
        <ProgressBar   
        progress={objData.count5}
         variant={variants.linear}
          bgColor="#3F271E"
         className="w-[400px] h-2 rounded-full"
          textColor="blue"
         middleText={false}
          />
        </div>
        <div>
            {objData.count5}
        </div>
       </div>
        </div>
        </div>
       </Elevation>


    </>
  )
}