import DashboardAdmin, { DataItem } from "@/components/Data/AdminDasboard";
import { data } from "@/components/Data/OrdersData";


const AdminDasboardStory = () => {
  const fixedData = data.map((item) => ({
    OrderId: item.OrderId,
    "Customer Name": item["Customer Name"],
    "Contact Number": item["Contact Number"],
    Address: item.Address,
    "Order Placed": item["Order Placed"],
    Status: item.Status,
    Products: (item.Products.agentName + " - " + item.Products.profileUrl) as React.ReactNode, // Convert to ReactNode
  }));
  

  const options = ["Mon","Tue","Wed","Thus","Fri","Sat","Sun"]
  
  return (
    <>
    <div className="w-[98vw]">
    <DashboardAdmin 
    UsersData={DataItem}
     TableData={fixedData}
      PendingData={fixedData }
      DayOption={options}/>
    </div>
    </>
 
  );
};

export default AdminDasboardStory;
