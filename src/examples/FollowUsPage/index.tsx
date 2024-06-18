import { Box, Headings } from "@/components";

// import FaverateCard from "../../components/Cards/FaverateCard"
import { useState } from "react";
// import ProductCard from "../../components/Cards/ProductCards"
import img01 from "./images/3897062800_1_1_1 1-1.png";

import UrlIcon from "./images/Hoverbutton.svg";
export const FollowPage = () => {
  const [demo, setData] = useState([
    { name: "first", imgSrc: img01 },
    { name: "second", imgSrc: img01 },
    { name: "third", imgSrc: img01 },
    { name: "fourth", imgSrc: img01 },
  ]);
  const IconClick = (values: any) => {
    alert(`You have ${values.name}`);
    console.log("dssss", values.name);
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
        {demo &&
          demo.map((values, index) => {
            return (
              <Box className="mx-1 my-1" key={index}>
                <img src={values.imgSrc} height={500} width={300} />
                <img
                  onClick={() => IconClick(values)}
                  src={UrlIcon}
                  style={{
                    position: "relative",
                    float: "inline-end",
                    marginTop: "-300px",
                    marginRight: "20px",
                  }}
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
  /* <FaverateCard  key={index}
imageSrc={values.imgSrc}

favorite
iconUrl={UrlIcon}

iconclick={()=>IconClick()} 

/> */
}
