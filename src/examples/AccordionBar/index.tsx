import { Checkbox } from "@/components"
import { Elevation } from "@/components"
import { staticData } from "./Staticdata"
import CoustomizeAccordion from "@/components/Accordion/CoustmaizeAccordion"





export const AccordionBar = () => {

  

  const handleChange = ((item: React.ChangeEvent<HTMLInputElement>)=> alert(`${item.target.value}`))


  return (
    <>
      <Elevation className="w-fit px-2 h-fit py-2 flex-col gap-6 font-sans font-medium ">
        <div className=" text-lg  w-full font-bold">Women</div>
       <div className="flex-col flex gap-1 ">
       {staticData?.map((item , i) => {
        return(
          <>
        <CoustomizeAccordion
        key={i}
         Icon={item?.Icon} 
         children={item?.children} 
         content={item?.content.map((value)=> <div className="flex justify-between font-thin" >{value} <Checkbox value={value} onChange={(e)=> handleChange(e)} /></div>)}
         childClassName={item?.childClassName}
         className="bg-gradient-to-r w-[200px] from-[#BFA59A] to-[#3F271E] text-white rounded-md"
         />
        
          </>
        )
          
        })}
       </div>
      </Elevation>


    </>
  )
}