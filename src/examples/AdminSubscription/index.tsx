import { AdminSubscriptionPage, SubsData } from "@/components/Data/SubscriptionData"


const AdminSubscriptionStory:React.FC = () => {
  

      const data = ["1 month", "2 week", "3 month"];
    return(
        <div className="w-[90vw]  ">
            <AdminSubscriptionPage   initialPlans={SubsData} data={data}  />
        </div>
    )
}

export default AdminSubscriptionStory