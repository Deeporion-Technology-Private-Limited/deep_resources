import Accordion from "@/components/Accordion";
import { AccordionTypes } from "@/components/Accordion/AccordionTypes";
import { UpCursor } from "@/components/Accordion/Icon/Icon";
import { AddressContactDetail, PaymentComp} from "@/components/Data/AddressField";

interface Props {
    handleBack:()=>void,
    handleSubmit:(e:any)=>void,
     userData :{ Name: string, email: string, State: string, Address: string ,Card_Name: string,
        Card_Number: string,
        Expiry_Date: string,
        Security_Date: string } ,
     setUserData:React.Dispatch<React.SetStateAction<{ Name: string, email: string, State: string, Address: string ,Card_Name: string,
        Card_Number: string,
        Expiry_Date: string,
        Security_Date: string }>>

}

export const ChooseAddress : React.FC<Props> = ({ handleSubmit ,userData ,setUserData ,handleBack})=>{

    const sections = [
        {
          content: <AddressContactDetail userData={userData} setUserData={setUserData} handleBack={handleBack}/>,
                      title: 'Contact Details',
        },
        {
          content: <PaymentComp handleBack={handleBack} userData={userData} setUserData={setUserData}/>,
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
            className="bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[600px] mt-2"
            childClassName="border-none"
            Icon={<UpCursor />}
            subChildren={section.subChildren}
          />
        ))}
      </form>

    )
}