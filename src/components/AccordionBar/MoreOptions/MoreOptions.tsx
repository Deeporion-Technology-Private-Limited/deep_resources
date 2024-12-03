import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Checkbox } from "../../Checkbox";

export const MoreOptions = () => {
  const brands = [
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    "Athena",
    "AURELIA",
    "Amydus",
    "Allen Solly",
    // Add other brands here...
  ];
  

  return (
    <div className="z-10 flex items-center justify-center">
      <div className="absolute left-40 top-80 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
        <div className="py-5">
          <div className="flex items-center justify-between p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Brands"
                className="search w-full rounded-lg border py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.8-5.4A7.5 7.5 0 1110.5 3 7.5 7.5 0 0119.5 11.5z"
                  />
                </svg>
              </div>
            </div>
            <button  className="bg-transparent">
              <RxCross2 />
            </button>
          </div>
          <div className="border-t">
            <div className="grid max-h-96 grid-cols-4 gap-4 overflow-auto px-4 pt-6">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center">
                  <Checkbox value={""} />
                  <label
                    htmlFor={`brand${index}`}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
