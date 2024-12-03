import { FindIconUrl } from "@/utils/Constant";

const search = FindIconUrl("Search.svg");
export function SearchImage() {
  return (
    <img src={search} alt="" />
  );
}


