import { FindIconUrl } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IDataTopNav } from "../Header/TopNavbar/TopNavConst";

export interface IProducts {
  id?: number | string;
  name?: string;
  brand?: string;
  product_id?: number;
  price_of_variant?: string | number;
  id_of_first_variant?: number;
  one_image_of_variant?: string;
  rating_and_review?: string | null;
  image?: string;
}

export function SearchVariant({
  searchItem,
  setSearchItem,
  data,
}: {
  searchItem: string;
  setSearchItem?: (searchItem: string) => void;
  data: IDataTopNav[];
}) {
  const search = FindIconUrl("Search.svg");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleActive = () => {
    setActive(!active);
  };
  const handleProductClick = (id: number | string) => {
    navigate(`/product-details/id=${id}`);
    if (setSearchItem !== undefined) {
      setSearchItem("");
    }
  };

  return (
    <div className="relative flex w-fit flex-col items-center">
      <div
        className={`flex h-[2.625rem] w-full items-center justify-between gap-3 rounded-full border-[2px] p-5 ${
          active ? "border-blue-500" : "border-[#E2E8F0]"
        }`}
        onFocus={handleActive}
        onBlur={handleActive}
      >
        <img src={search} />
        <input
          value={searchItem}
          placeholder="Search..."
          onChange={(e) => setSearchItem!(e.target.value)}
          className="w-full bg-white outline-none"
          name="search"
        />
      </div>
      {searchItem && (
        <div className="absolute right-0 top-[3.7rem] w-[30rem] flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-2 shadow-lg xl:w-[50rem]">
          <span className="flex items-center justify-center gap-2 p-2">
            Showing results for <p className="capitalize">"{searchItem}"</p>
          </span>
          {data?.length > 0 ? (
            data?.map((item) => (
              <div
                key={item?.id}
                className="cursor-pointer border-b-2 px-4 py-2 hover:bg-gray-200"
                onClick={() => handleProductClick(item?.id!)}
              >
                <div>
                  <span className="flex gap-1 capitalize">
                    <div className="mx-2">
                      <img
                        src={
                          item?.image
                            ? item?.image
                            : "https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        className="object-fit h-[50px] w-[50px] rounded-full"
                        alt="img not found"
                      />
                    </div>

                    <div>
                      {item?.name}
                      <p className="text-sm text-gray-500">{item?.brand}</p>
                    </div>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-2 p-4">
              {data?.length === 0 && (
                <p className="text-sm font-light">No products found</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

