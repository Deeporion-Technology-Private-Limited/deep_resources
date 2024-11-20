import { useState } from "react"
import NotificationData from "@/components/Data/NotificationSettingsData";
import { initialProp } from "@/components";

 const NotificationSettings :React.FC = ()=>{

    const [initialState ,setInitialState]=useState<initialProp>({PauseNotification : false ,
        innApp : false ,
        Email:false ,
        SMS:false ,
        WhatsApp:false})
       
        console.log("initialState",initialState);  //console showing because initialValue not used 
  
   return(
    <>
   <div className="w-[95vw]">
   <NotificationData setInitialState={setInitialState}/>
   </div>
    </>
)
}

export default NotificationSettings