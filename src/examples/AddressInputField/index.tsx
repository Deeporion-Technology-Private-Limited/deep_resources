import Accordion from "@/components/Accordion";
import { AccordionTypes } from "@/components/Accordion/AccordionTypes";
import { UpCursor } from "@/components/Accordion/Icon/Icon";
import { AddressContactDetail, PaymentComp} from "@/components/Data/AddressField";
import { stateProp } from "./AddressInterFace";

export interface Props {
    handleBack:()=>void,
    handleSubmit:(e:any)=>void,
     userData : stateProp ,
     setUserData:React.Dispatch<React.SetStateAction<stateProp>>
     handleChange:(e:any)=>void

}

export const ChooseAddress : React.FC<Props> = ({ handleSubmit ,userData ,setUserData ,handleBack , handleChange})=>{

    const sections = [
        {
          content: <AddressContactDetail userData={userData} setUserData={setUserData} handleBack={handleBack} handleChange={handleChange} />,
                      title: 'Contact Details',
        },
        {
          content: <PaymentComp handleBack={handleBack} userData={userData} setUserData={setUserData} handleChange={handleChange}/>,
          title: 'Payment',
          subChildren:" All transactions are secure and encrypted",
        }
      ];

    return(
        <form className="flex-row" onSubmit={handleSubmit}>
        {sections.map((section, index) => (
          <Accordion
            key={index}
            variant={AccordionTypes.Cursor}
            content={section.content}
            children={section.title}
            className="bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[60vw] mt-2"
            childClassName="border-none"
            Icon={<UpCursor />}
            subChildren={section.subChildren}
          />
        ))}
      </form>

    )
}