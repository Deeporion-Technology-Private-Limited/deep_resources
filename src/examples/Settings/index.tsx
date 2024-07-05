import Tabs from "@/components/Tabs";
import { tabData } from "./data";

const Settings = () => {
  return <Tabs tabs={tabData} className="flex flex-col gap-10 "/>;
};
export default Settings;
