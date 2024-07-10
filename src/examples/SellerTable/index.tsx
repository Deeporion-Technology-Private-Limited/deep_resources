import { useState } from "react";
import { SellerInterface } from "./Sellerinterface";
import SellerTable from "@/components/Data/SellerTable";
import { FindIconUrl } from "@/utils/Constant";

const SellerTableExample = ()=>{

 const [obj, setObj] = useState<SellerInterface[]>([
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Blue Printed",
            Price: "₹ 3000",
            OnBoardingDate: '4/25/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Red Floral",
            Price: "₹ 2500",
            OnBoardingDate: '3/15/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Green Striped",
            Price: "₹ 2000",
            OnBoardingDate: '2/10/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Yellow Checkered",
            Price: "₹ 3500",
            OnBoardingDate: '5/20/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Black Polka Dot",
            Price: "₹ 4000",
            OnBoardingDate: '1/5/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Purple Solid",
            Price: "₹ 1500",
            OnBoardingDate: '6/30/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "White Embroidered",
            Price: "₹ 5000",
            OnBoardingDate: '7/15/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Orange Geometric",
            Price: "₹ 2800",
            OnBoardingDate: '8/25/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Pink Lace",
            Price: "₹ 3200",
            OnBoardingDate: '9/10/2024',
            verification: "Pending",
            Checked: "",
        },
        {
            img: `${FindIconUrl("ProjectImage.svg")}`,
            Product: "Gray Casual",
            Price: "₹ 1800",
            OnBoardingDate: '10/5/2024',
            verification: "Pending",
            Checked: "",
        }
    ]);
    

    return(
        <SellerTable obj={obj} setObj={setObj} />
    )

}

export default SellerTableExample