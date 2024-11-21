import { Box, Text } from "@/components";

const PrivacyPolicy = () => {
  return (
    <Box className="h-fit w-full shadow-xl">
      <Box className="h-[6rem] flex items-center border-b-2">
        <Text className="leading-7 font-bold text-2xl pl-5">
          Privacy Policy
        </Text>
      </Box>
      <Box className="p-5">
        <Text className="font-normal leading-6 text-base text-[#72787F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Box>
      <Box className="p-5">
        <Box>
          <Text className="font-bold  text-2xl capitalize">
            Information We Collect
          </Text>
        </Box>
        <Box>
          <Text className="font-normal leading-6 text-base text-[#72787F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Box>
      <Box className="p-5">
        <Box>
          <Text className="font-bold  text-2xl capitalize">
            Information We Do Not Collect
          </Text>
        </Box>
        <Box>
          <Text className="font-normal leading-6 text-base text-[#72787F]">
            Magna fringilla urna porttitor rhoncus dolor purus non. At tellus at
            urna condimentum mattis pellentesque. Pellentesque adipiscing
            commodo elit at imperdiet. Mattis vulputate enim nulla aliquet
            porttitor lacus luctus. In massa tempor nec feugiat nisl pretium
            fusce id velit. Eu augue ut lectus arcu bibendum at. Ornare quam
            viverra orci sagittis.
          </Text>
        </Box>
      </Box>
      <Box className="p-5">
        <Box>
          <Text className="font-bold  text-2xl capitalize">Disclaimer</Text>
        </Box>
        <Box className="pl-5">
          <ul style={{ listStyleType: "disc" }}>
            <li className="font-normal leading-6 text-base text-[#72787F]">
              Magna fringilla urna porttitor rhoncus dolor purus non.
            </li>
            <li className="font-normal leading-6 text-base text-[#72787F]">
              At tellus at urna condimentum mattis pellentesque. Pellentesque
              adipiscing commodo elit at imperdiet.
            </li>
            <li className="font-normal leading-6 text-base text-[#72787F]">
              Mattis vulputate enim nulla aliquet porttitor lacus luctus. In
              massa tempor nec feugiat nisl pretium fusce id velit.
            </li>
            <li className="font-normal leading-6 text-base text-[#72787F]">
              Eu augue ut lectus arcu bibendum at. Ornare quam viverra orci
              sagittis. Aliquam eleifend mi in nulla posuere. Facilisi etiam
              dignissim diam quis enim lobortis scelerisque fermentum.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
export default PrivacyPolicy;
