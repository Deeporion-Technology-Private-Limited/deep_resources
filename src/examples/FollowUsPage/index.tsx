import { Box, Headings } from "@/components";
import UrlIcon from "./images/Hoverbutton.svg";
import FaverateCard from "@/components/Cards/FaverateCard";

import { IFollowUsData, FollowUsData } from '../../components/Data/FollowUsInsta';





export const FollowPage = () => {
  
  const IconClick = (values: any) => {
    alert(`You have clicked ${values.name}`);
  };
  return (
    <Box>
      <Box className="flex flex-col items-center justify-center mb-3">
        {/* <Box className="grid lg:grid-cols-4 gap-5 w-full md:grid-cols-2 grid-cols-2 sm:grid-cols-1  shadow-xl p-5"> */}
        <Headings
          FontSize="text-xl"
          fontWeight="font-extrabold"
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

{
  /* <ProductCard  favorite imageSrc={values.imgSrc} /> */
}

{
  /* <img src={values.imgSrc} height={500} width={300} />
<img
  onClick={() => IconClick(values)}
  src={UrlIcon}
  style={{
    position: "relative",
    float: "inline-end",
    marginTop: "-300px",
    marginRight: "20px",
  }}
/> */
}
