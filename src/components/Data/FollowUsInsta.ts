import CardImage1 from "../../examples/FollowUsPage/images/CardImage1.svg"
import CardImage2 from "../../examples/FollowUsPage/images/CardImage2.svg"
import CardImage3 from "../../examples/FollowUsPage/images/CardImage3.svg"
import CardImage4 from "../../examples/FollowUsPage/images/CardImage4.svg"
import { IFollowUsData } from "../types"

export const FollowUsData :IFollowUsData  = {

    heading:"Follow us on Instagram",
    contents:"@abc12ecommerce",
    imagedetails:[
    
    {
        name: "John Doe",
        img: `${CardImage1}`
    },
    {
        name: "Jane Smith",
        img: `${CardImage2}`
    },
    {
        name: "Emily Johnson",
        img: `${CardImage3}`
    },
    {
        name: "Michael Brown",
        img: `${CardImage4}`
    }
]
};

