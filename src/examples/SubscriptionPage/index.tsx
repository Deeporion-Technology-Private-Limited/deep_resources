import { Box, Button, Headings, Input } from "@/components";
import { ButtonSize, ButtonVariant } from "@/components/Button/type";
import {
  SubscriptionData,
  PaymentHistoryFormatted,
} from "@/components/Data/Subscriptions";
import { useState } from "react";
import { InputType, InputVariant } from "@/components/Input/type";
import { Table } from "@/components/Table/Table";
import {PayPalIcon,Apple,CheckCircle,MasterCardIcon} from '@/components/Icons';
const SubscriptionBox = (props: any) => {
  
  const { data } =  props;
  return (
    <Box className=" w-full" style={{ width: "100%" }}>
      <Box
        className="shadow-lg px-4 py-4  box box-border border rounded-md"
        style={{ width: "100%" }}
      >
        <Headings
          fontWeight="font-bold"
          FontSize="text-lg"
          text="Plan & Pricing"
          style={{ marginBottom: "10px" }}
        />
        <Box className="ml-1  border-t-2 pt-2">
          <Box className="flex justify-between ">
            <Headings
              fontWeight="font-bold"
              FontSize="text-base"
              text={data.planFor}
            />
            <Button
              className="w-auto px-2 py-0 rounded-full"
              onClick={(data) => props.buttonsStatus(data)}
              variant={
                data.status === "Active"
                  ? ButtonVariant.DefaultPrimary
                  : ButtonVariant.DefaultDarkBackground
              }
              size={ButtonSize.Small}
            >
              {data.status}
            </Button>
          </Box>
          <Headings
            style={{ color: "#64748B", textAlign: "left" }}
            fontWeight="font-normal"
            FontSize="text-base"
            text="Perfect plan for Professional"
          />
          <Box className="flex justify-start items-center">
            <span>
              <CheckCircle />
            </span>
            <span className="flex m-3 text-xs font-bold">
              Get a Basic Plan{" "}
            </span>
          </Box>
          <Box className="flex justify-start items-center">
            <span>
              
              <CheckCircle />
            </span>
            <span className="flex m-3 text-xs">
              <p>
                <b>E-commerce</b> automation's{" "}
              </p>
            </span>
          </Box>
          <Box className="flex justify-start items-center">
            <span>
              <CheckCircle />
            </span>
            <span className="flex m-3 text-xs">
              <p>
                <b>{data.transactionPercent}%</b> transaction fees{" "}
              </p>
            </span>
          </Box>
          <Box>
            <p className="flex items-center  text-small">
              <b>&#8377;{data.price}</b>
              <span className="text-xs text-[#72787F]">/{data.planType}</span>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const  SubscriptionPage = () => {
  const [paymentData, setPaymentData] = useState();
  const [paymentStatus, setPaymentStatus] = useState("Subscription");
  function selectedStatus(data: any) {
    setPaymentData(data);
    setPaymentStatus("SubscriptionStatus");
  }
  return (
    <Box className="w-full">
      <Headings
        fontWeight="font-bold"
        FontSize="text-lg"
        text="Subscription"
        style={{ marginBottom: "10px" }}
      />

      {paymentStatus == "Subscription" &&
        SubscriptionData &&
        SubscriptionData.map((data, index) => {
          return (
            <Box className="my-2" key={index} style={{ width: "800px" }}>
              <SubscriptionBox
                data={data}
                key={index}
                buttonsStatus={() => selectedStatus(data)}
              />
            </Box>
          );
        })}
      {paymentStatus == "SubscriptionStatus" && (
        <Box>
          <Box className="flex justify-between">
            <Box className="text-center" style={{ width: "45%" }}>
              <SubscriptionBox data={paymentData} />
            </Box>
            <Box
              className="shadow-lg px-4 py-4  box box-border border rounded-md"
              style={{ width: "50%" }}
            >
              <Headings
                fontWeight="font-bold"
                FontSize="text-lg"
                text="Payment method"
                style={{ textAlign: "center" }}
              />
              <Box className="my-2">
                <label className="text-xs font-semibold">
                  More Payment Options
                </label>
                <Input
                  search={<PayPalIcon />}
                  type={InputType.SearchIcon}
                  variant={InputVariant.Outlined}
                  placeholder="More Payment Options"
                  value={""}
                />
              </Box>
              <Box className="my-2">
                <label className="text-xs font-semibold">
                  Credit cards and Debit Cards
                </label>
                <Input
                  type={InputType.SearchIcon}
                  search={<MasterCardIcon />}
                  variant={InputVariant.Outlined}
                  placeholder="Add New Card"
                  value={""}
                />
              </Box>
              <Box className="my-2">
                <Input
                  type={InputType.SearchIcon}
                  search={<Apple/>}
                  variant={InputVariant.Outlined}
                  placeholder="Apply pay"
                  value={""}
                />
              </Box>
            </Box>
          </Box>
          <Box className="shadow-lg px-4 py-4 my-3  box box-border border rounded-md">
            <Headings
              fontWeight="font-bold"
              FontSize="text-lg"
              text="Payments"
              style={{ marginBottom: "25px", marginTop: "15px" }}
            />
            <hr className="w-full" />

            <Table data={PaymentHistoryFormatted} />
          </Box>
        </Box>
      )}

      <Box></Box>
    </Box>
  );
};
