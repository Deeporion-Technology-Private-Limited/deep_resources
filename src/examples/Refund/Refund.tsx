import { Box } from "@/components/Layout/Box/index";
import RefundDetails from "./RefundDetails";

export const Refund = () => {
  return (
    <Box
      className="flex justify-center"
      style={{
        width: "100%",
        maxWidth: "1320px",
        height: "793px",
        marginTop: "116px",
        marginLeft: "60px",
      }}
    >
      <Box className="flex flex-col w-full">
        <Box className="flex items-center space-x-2 pb-3">
          <span className="text-xl font-normal">Orders</span>
          <span>&gt;</span>
          <span className="text-base font-bold">Refund</span>
        </Box>
        <Box>
          <Box className="flex flex-col lg:flex-row gap-4">
            <Box
              className="w-full"
              style={{
                width: "762px",
                gap: "20px",
              }}
            >
              <RefundDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
