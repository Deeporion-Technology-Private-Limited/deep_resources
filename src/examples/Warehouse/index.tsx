import Tabs from "@/components/Tabs";
import { Components } from "./data";

const Warehouses = () => {
  const value = Components();
  return <Tabs tabs={value} className="flex flex-col gap-10" />;
};
export default Warehouses;
