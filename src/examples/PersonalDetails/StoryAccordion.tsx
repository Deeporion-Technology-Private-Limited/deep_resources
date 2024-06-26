import { useState } from "react"
import { PersonalDetails } from "."
import { initialData } from "@/components/Data/PersonalDetailsData"
import { StateProp } from "./interfaceAddCart"


export  const StroyAccordion = ()=>{

    const [initialState , setInitialState] = useState<StateProp>(initialData) 
    

    const handleBack = ()=>{
        alert("Back Button")
    }

    const handleChange = (e:any)=>{
     const {name , value} = e.target
     setInitialState((pev:any)=>({...pev , [name]:value}))
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        alert("Submit Button")
    }
    
    return(

        <div className="w-fit h-[400px]">
            <PersonalDetails  
         handleBack={handleBack} 
         handleChange={handleChange} 
         initialState={initialState} 
        setInitialState={setInitialState}
        handleSubmit={handleSubmit}
        />
        </div>
    )
}