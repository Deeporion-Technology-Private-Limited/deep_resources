import Accordion from "@/components/Accordion"
import { Checkbox } from "@/components"
import { Elevation } from "@/components"
import { staticData } from "./Staticdata"





export const CoustomizeAccordion = () => {

  

  const handleChange = ((item: React.ChangeEvent<HTMLInputElement>)=> alert(`${item.target.value}`))


  return (
    <>
      <Elevation className="w-fit px-2 h-fit py-2 flex-col gap-6 font-sans font-medium ">
        <div className=" text-lg  w-full font-bold">Women</div>
       <div className="flex-col flex gap-1 ">
       {staticData?.map((item , i) => {
        return(
          <>
        <Accordion
        key={i}
         Icon={item?.Icon} 
         children={item?.children} 
         content={item?.content.map((value)=> <div className="flex justify-between font-thin" >{value} <Checkbox value={value} onChange={(e)=> handleChange(e)} /></div>)}
         variant={item?.variant}
         childClassName={item?.childClassName}
         className="bg-gradient-to-r w-[200px] from-[#BFA59A] to-[#3F271E] text-white"
         />
        
          </>
        )
          
        })}
       </div>
      </Elevation>


    </>
  )
}