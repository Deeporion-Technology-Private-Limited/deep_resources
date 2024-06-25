import { useState } from "react"
import { MyCartSummary, StateProp } from "."
import { initialData } from "@/components/Data/MyCartSummaryData"


export  const StroyAccordion = ()=>{

    const [initialState , setInitialState] = useState<StateProp>(initialData) 
    

    const handleBack = ()=>{
        alert("Back Button")
    }

    const handleChange = (e:any)=>{
     const {name , value} = e.target
     setInitialState((pev)=>({...pev , [name]:value}))
    }

    const handleSubmit = ()=>{
        alert("Submit Button")
    }
    return(

        <div className="w-fit h-[400px]">
            <MyCartSummary  
         handleBack={handleBack} 
         handleChange={handleChange} 
         initialState={initialState} 
        setInitialState={setInitialState}
        handleSubmit={handleSubmit}
        />
        </div>
    )
}