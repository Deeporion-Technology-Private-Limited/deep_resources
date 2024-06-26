import { useState } from "react"
import { initialProp } from "./SettingsInterface";
import NotificationData from "@/components/Data/NotificationSettingsData";

 const NotificationSettings :React.FC = ()=>{

    const [initialState ,setInitialState]=useState<initialProp>({PauseNotification : false ,
        innApp : false ,
        Email:false ,
        SMS:false ,
        WhatsApp:false})
       
        console.log("initialState",initialState);  //console showing because initialValue not used 
  
   return(
    <>
    <NotificationData setInitialState={setInitialState}/>
    </>
)
}

export default NotificationSettings