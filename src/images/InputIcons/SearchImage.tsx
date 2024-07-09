import { FindIconUrl } from "@/utils/Constant";

const search = FindIconUrl("Search.svg");
export default function SearchImage() {
  return (
    <img src={search} alt="" />
  );
}


