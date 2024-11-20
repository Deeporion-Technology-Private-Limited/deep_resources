
import { AdminAccountDetails } from "@/components/Data/AdminAccountData"
import { useState } from "react";


   const AdminStoryComp:React.FC = ()=>{
     const [initalState, setIntialState] = useState({ card_Details:"Visa ending on ***2345",
        Currency:"",
        Currecys:["US Dollar", "Australian dollar", "Indian rupee"],
        fullName:"",
        Email:"",
        Address:""});
      
        const handleBack = ()=>alert("Back Button")
        const handleChange = (e:any)=> setIntialState((pev)=>({...pev,[e.target.name]:e.target.value}));
        const handleDeleteAccount = ()=> alert("DeleteAccount")
        const handleNext = ()=> alert('Next Button')
        const handleChangePassword = ()=> alert("ChangePassword")
        const handleLogout = ()=> alert("Logout")
        const handleEdit = ()=>alert("Edit Button")

    return(
        <>
        <div className="w-[70vw]">
        <AdminAccountDetails 
         Details={initalState}
         handleBack={handleBack}
         handleChange={handleChange}
         DeleteAccount={handleDeleteAccount}
         handleNext={handleNext}
         ChangePassword={handleChangePassword}
         Logout={handleLogout}
         handleEdit={handleEdit}

          />

        </div>
      
        </>
    )
}


export default AdminStoryComp