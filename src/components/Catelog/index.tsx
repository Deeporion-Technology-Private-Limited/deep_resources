import { Button } from "../Button/DefaultButton";
import { IconButton } from "../Button/SingleIconButton";
import { ButtonDirection, ButtonIconPosition } from "../types";
import { Box } from "../Layout";
import { Text } from "../Text";
import { forwardRef, useState } from "react";
import { Items, user } from "../types";
import { FindIconUrl } from "@/utils/Constant";
export const Cateloge = forwardRef<HTMLDivElement, Items>(
  ({ data, handleClick, userType }, ref) => {
    const additem = () => {
      const exists = data?.some((item: user) => item.id === currentItem?.id);
      if (exists) {
        const index = data?.findIndex(
          (item: user) => item.id === currentItem?.id
        );
        data[index].type = editItem ?? "";
        setEditItem("");
      } else {
        data.unshift({ type: editItem });
        setEditItem("");
      }
      setItem(false);
    };
    const [item, setItem] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<string | undefined>("");
    const [currentItem, setCurrentItem] = useState<user>({});

    const handleValue = (val: any) => {
      setItem(true);
      const exists = data.some((item: user) => item.id === val.id);
      if (exists) {
        const index = data.findIndex((item: user) => item.id === val.id);
        setEditItem(data[index].type);
      }
    };
    const handleDelete = (val: any) => {
      const index = data.findIndex((item: user) => item.id === val.id);
      data.splice(index, 1);
      setItem(false);
    };

    return (
      <Box className="w-[30rem] h-fit shadow-xl flex-wrap" ref={ref}>
        <Box className="flex border-b-2 w-full justify-between items-center p-5">
          <Box className="">
            <Text as="h1" className="text-2xl font-bold capitalize ">
              {userType}
            </Text>
          </Box>
          <Box>
            <Button
              className="bg-[#D7C7C1] text-black  text-xl font-semibold rounded-[12px] capitalize p-4"
              iconUrl={FindIconUrl("Add.svg")}
              iconPosition={ButtonIconPosition.Right}
              onClick={() => {
                setItem(!item);
              }}
            >
              add
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="pl-2 pr-2 border-b-2">
            {data?.map((val: user) => (
              <Box
                className={`flex p-2 justify-between items-center  hover:text-2xl cursor-pointer  w-full h-full ${currentItem?.id === val?.id ? "bg-[#D7C7C1]" : null}`}
                onClick={() => {
                  handleClick ? handleClick(val) : null;
                  setCurrentItem(val);
                }}
              >
                <Box>
                  <Text as={"span"} className="capitalize font-medium text-xl">
                    {val.type}
                  </Text>
                </Box>
                <Box className="flex">
                  <IconButton
                    backgroundColor="transparent"
                    direction={ButtonDirection.Row}
                    iconUrl={FindIconUrl("edit.svg")}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleValue(val);
                      setCurrentItem(val);
                    }}
                  />
                  <IconButton
                    backgroundColor="transparent"
                    iconUrl={FindIconUrl("delete_outline_24px.svg")}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(val);
                      setItem(true);
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          {item && (
            <Box className="flex p-2 gap-4">
              <Box className="border-4 flex justify-around items-center pl-4 pr-4 gap-1 rounded-2xl">
                <img src={FindIconUrl("search.svg")} className="size-6 text-[#9EA4AA]" />
                <input
                  type="text"
                  className="text-[#9EA4AA] pl-2 pr-2 w-full outline-none capitalize"
                  placeholder="placeholder"
                  value={editItem}
                  onChange={(e) => {
                    setEditItem(e.target.value);
                  }}
                />
              </Box>
              <Box className="flex">
                <IconButton
                  backgroundColor="transparent"
                  iconUrl={FindIconUrl("right.svg")}
                  className="justify-center text-[4rem]"
                  onClick={() => {
                    additem();
                  }}
                />
                <IconButton
                  backgroundColor="transparent"
                  iconUrl={FindIconUrl("wrong.svg")}
                  onClick={() => {
                    setItem(false);
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
