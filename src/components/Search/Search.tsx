import { color } from "@/utils/colorThemes";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Search({
  searchItem,
  setSearchItem,
}: {
  searchItem: string;
  setSearchItem: Function;
}) {
  const [searchOpen, setSearchOpen] = useState(true);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchItem("");
    }
  };

  return (
    <div className="">
      {searchOpen ? (
        <div
          className={`h-mid searchRight flex w-[] rounded-[2.5rem] border-[1.5px] border-[${color.white}]`}
        >
          <input
            placeholder="Search Name"
            className="h-[2.8rem] w-[10.5rem] rounded-[2.5rem] border-none p-2 pl-4 outline-none md:w-[8.5rem] lg:w-[11.5rem]"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button
            className="px-2 py-1"
            onClick={() => {
              setSearchOpen(false);
              setSearchItem("");
            }}
          >
            <IoClose className="h-[1rem] w-[1rem]" />
          </button>
        </div>
      ) : (
        <div
          className={`flex cursor-pointer items-center justify-center rounded-[2.5rem] border-[1.5px] border-[${color.lightWhite}] p-2 text-${color.gray300}`}
          onClick={handleSearchClick}
        >
          <GoSearch className="h-[1.575rem] w-[1.575rem]" />
        </div>
      )}
    </div>
  );
}

export default Search;
