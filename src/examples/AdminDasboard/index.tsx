import DashboardAdmin, { DataItem } from "@/components/Data/AdminDasboard";
import { data, data2 } from "../Orders/data";


const AdminDasboardStory = () => {


  const options = ["Mon","Tue","Wed","Thus","Fri","Sat","Sun"]
  
  return (
    <>
    <div className="w-[98vw]">
    <DashboardAdmin 
    UsersData={DataItem}
     TableData={data}
      PendingData={data2 }
      DayOption={options}/>
    </div>
    </>
 
  );
};

export default AdminDasboardStory;
