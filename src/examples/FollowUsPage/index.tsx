import { Box, Headings } from "@/components";
import UrlIcon from "./images/Hoverbutton.svg";
import FaverateCard from "@/components/Cards/FaverateCard";

import {  FollowUsData } from '../../components/Data/FollowUsInsta';

export const FollowPage = () => {
  
  const IconClick = (values: any) => {
    alert(`You have clicked ${values.name}`);
  };
  return (
    <Box>
      <Box className="flex flex-col items-center justify-center mb-3">
        <Headings
          FontSize="text-3xl"
          fontWeight="font-bold"
          text={"Follow us on Instagram"}
          style={{ padding: "5px" }}
        />
        <hr style={{ width: "50%", borderBottom: "2px solid #BFA59A" }} />
        <Headings
          FontSize="text-base"
          fontWeight="font-normal"
          text={"@abc12ecommerce"}
          style={{ color: "#26282B", marginTop: "10px", marginBottom: "10px" }}
        />
      </Box>
      <Box className="flex flex-wrap justify-center mt-2">
        {FollowUsData.imagedetails.map((item, index: number)  => {
            return (
              <Box className="mx-1 my-1" key={index}>
                <FaverateCard
                  key={index}
                  imageSrc={item.img}
                  favorite
                  iconUrl={UrlIcon}
                  imageStyle=" w-[19.625rem] h-[37.1875rem]"
                  starRating={false}
                  isDescription={false}
                  onIconClick={()=>{IconClick(item)}}
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

