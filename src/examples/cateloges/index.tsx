import { Box, Cateloge } from "@/components";
import { arr, user } from "@/components/Catelog/data";
import { useState } from "react";

const Cateloges = () => {
  const [name, setName] = useState<user>({});
  const [data, setData] = useState<user>({});

  const handlePageChange = (user: user) => {
    setName(user);
  };

  const handlePage = (users: user) => {
    setData(users);
  };
  const type = arr?.find((item) => item.id === name?.id);
  const category = type?.category?.find((item) => item.id === data?.id);

  return (
    <Box className="flex gap-5 flex-wrap">
      <Cateloge
        data={arr}
        userType="user type"
        handleClick={handlePageChange}
      />
      <Cateloge
        data={type ? type?.category : arr[0]?.category}
        userType="Categories"
        handleClick={handlePage}
      />
      <Cateloge data={category?.subcomponent} userType="Products" />
    </Box>
  );
};
export default Cateloges;
