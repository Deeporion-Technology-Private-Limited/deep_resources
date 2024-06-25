import { useState } from "react"
import { ChooseAddress } from "."

export const DemoAddressField = ()=>{
    const [userData , setUserData]= useState( {Name:"Nitesh",email:"Niteshnm123456@",State:"Bangalore"
        ,Address:'19f Abhinay Theatre Complex, bvk Iyengar Street - 560009',Card_Name: "",
        Card_Number: "",
        Expiry_Date: "",
        Security_Date: "" }   )

        const handleSubmit = (e:any)=>{
            e.preventDefault()
            alert("submit")
        }
        const handleBack = ()=>{
            alert("Back Button")
        }
        

    return(
        <div className="w-fit h-[500px]">
            <ChooseAddress 
           userData={userData} 
           setUserData={setUserData} 
          handleSubmit={handleSubmit} 
           handleBack={handleBack} />
        </div>
    )
}