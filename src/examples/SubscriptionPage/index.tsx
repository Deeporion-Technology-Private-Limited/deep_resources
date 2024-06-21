import { Box, Button, Headings } from "@/components";
import { ButtonSize, ButtonVariant } from "@/components/Button/type";
import Check_Filled from "../../images/Check_filled.svg";
import { SubscriptionData } from "@/components/Data/Subscriptions";
export const SubscriptionPage = () => {
  return (
    <Box className="" style={{ width: "900px" }}>
      <Headings fontWeight="font-bold" FontSize="text-lg" text="Subscription" />
      <Box
        className="shadow-lg px-4 py-4  box box-border border rounded-md"
        style={{ width: "75%" }}
      >
        <Headings
          fontWeight="font-bold"
          FontSize="text-lg"
          text="Plan & Pricing"
          style={{marginBottom:"10px"}}
        />
        {SubscriptionData && SubscriptionData.map((data,index)=>{
            return (
                <Box className="ml-1 my-2 border-t-2 pt-2" key={index}>
                <Box className="flex justify-between ">
                  <Headings
                    fontWeight="font-bold"
                    FontSize="text-base"
                    text={data.planFor}
                  />
                  <Button
                    className="w-auto px-2 py-0 rounded-full"
                    variant={data.status === "Active" ? ButtonVariant.DefaultPrimary : ButtonVariant.DefaultDarkBackground}
                    size={ButtonSize.Small}
                  >
                    {data.status}
                  </Button>
                </Box>
                <Headings
                  style={{ color: "#64748B" }}
                  fontWeight="font-normal"
                  FontSize="text-base"
                  text="Perfect plan for Professional"
                />
                <Box className="flex justify-start items-center">
                  <span>
                    <img src={Check_Filled} alt="check_circle_outline" />
                  </span>
                  <span className="flex m-3 text-xs font-bold">
                    Get a Basic Plan{" "}
                  </span>
                </Box>
                <Box className="flex justify-start items-center">
                  <span>
                    <img src={Check_Filled} alt="check_circle_outline" />
                  </span>
                  <span className="flex m-3 text-xs">
                    <p>
                      <b>E-commerce</b> automation's{" "}
                    </p>
                  </span>
                </Box>
                <Box className="flex justify-start items-center">
                  <span>
                    <img src={Check_Filled} alt="check_circle_outline" />
                  </span>
                  <span className="flex m-3 text-xs">
                    <p>
                      <b>{data.transactionPercent}%</b> transaction fees{" "}
                    </p>
                  </span>
                </Box>
                <Box>
                
                    <p className="flex items-center  text-small">
                      <b>&#8377;{data.price}</b><span className="text-xs text-[#72787F]">/{data.planType}</span>
                    </p>
                  
                </Box>
              </Box>
            )
        })}
       
        <Box></Box>
      </Box>
    </Box>
  );
};
