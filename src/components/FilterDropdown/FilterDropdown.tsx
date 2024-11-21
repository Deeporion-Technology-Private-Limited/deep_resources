import { ChangeEvent } from "react";
import { CoustomizeAccordion } from "../Accordion";
import { Checkbox } from "../Checkbox";
import { Elevation } from "../Elevation";
import { staticData } from "../AccordionBar/data";
import ToastServices from "@/ToastServices";



export const FilterDropdown = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    ToastServices.showToast({
      type: "warning",
      message: e.target.value,
      autoClose: 3000,
    });
  };

  return (
    <>
      <div className="h-full overflow-y-auto lg:block">
        <Elevation className="h-[fit] w-fit flex-col gap-6 px-2 py-3 font-sans font-medium">
          <div className="w-full text-lg font-bold">Women</div>
          <div className="flex flex-col gap-1">
            {staticData?.map((item, i) => {
              return (
                <>
                  <CoustomizeAccordion
                    key={i}
                    Icon={item?.Icon}
                    more={item?.more}
                    isMore={item?.isMore}
                    // handleMore={handleClick}
                    children={item?.children}
                    content={item?.content.map((value) => (
                      <div
                        key={value}
                        className="flex justify-between font-normal"
                      >
                        {value}
                        <Checkbox value={value} onChange={handleChange} />
                      </div>
                    ))}
                    childClassName={item?.childClassName}
                    className="w-[200px] rounded-md bg-gradient-to-r from-[#BFA59A] to-[#3F271E] text-white"
                  />
                </>
              );
            })}
          </div>
        </Elevation>
      </div>
    </>
  );
};
