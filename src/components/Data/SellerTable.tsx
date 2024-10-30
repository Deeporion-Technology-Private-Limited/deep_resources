import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "../Checkbox";
import { Chips } from "../Chips";
import { GreyDeleteIcon } from "../Icons";
import { ButtonSize, ChipsTypes, SellerInterface } from "../types";

interface CompInterface {
  obj: SellerInterface[];
  setObj: Dispatch<SetStateAction<SellerInterface[]>>;
}

const SellerTable: React.FC<CompInterface> = ({ obj, setObj }) => {
  const handleDelete = (index: number) => {
    setObj((prevObj) => {
      const newObj = [...prevObj];
      newObj.splice(index, 1);
      return newObj;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked } = e.target;

    if (checked) {
      setObj((prevObj) =>
        prevObj.map((item, i) =>
          i === index
            ? { ...item, Checked: "In Stock", verification: "Verified" }
            : item
        )
      );
    } else {
      setObj((prevObj) =>
        prevObj.map((item, i) =>
          i === index ? { ...item, Checked: "", verification: "Pending" } : item
        )
      );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {[
              "Product",
              "Price",
              "Onboarding Date",
              "Verification Status",
              "Available",
            ].map((item) => (
              <th
                key={item}
                className=" p-[] w-[209.6px] font-medium font-sans text-left"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {obj.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="flex flex-col md:flex-row items-start md:items-center py-2 md:py-4 text-sm gap-2">
                <img
                  src={item.img}
                  alt={item.Product}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <span>{item.Product}</span>
              </td>
              <td className="text-sm py-2 md:py-4">{item.Price}</td>
              <td className="text-sm py-2 md:py-4">{item.OnBoardingDate}</td>
              <td className="text-sm py-2 md:py-4">
                {item.verification === "Pending" ? (
                  <Chips
                    className="py-1 px-3 bg-[#FEE2E2] text-[#DC2626] cursor-pointer"
                    variant={ChipsTypes.not_active}
                    children={"Pending"}
                  />
                ) : (
                  <Chips
                    className="py-1 px-3 bg-[#D1FAE5] text-[#059669] cursor-pointer"
                    variant={ChipsTypes.not_active}
                    children={"Verified"}
                  />
                )}
              </td>
              <td>
                <div className=" flex items-center gap-3">
                  <Checkbox
                    labelPosition="before"
                    size={ButtonSize.Medium}
                    type="toggle"
                    variant="Basic"
                    value={"Active"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e, index)
                    }
                    containerClassName="w-14 h-7"
                    checkedClassName="w-4 h-4"
                    checked={false}
                  />
                  <div className="w-16 text-sm font-serif">{item.Checked}</div>
                  <div
                    className="cursor-pointer hover:border"
                    onClick={() => handleDelete(index)}
                  >
                    <GreyDeleteIcon />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerTable;
