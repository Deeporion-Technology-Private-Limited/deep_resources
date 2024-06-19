import images from '../../examples/FollowUsPage/images/3897062800_1_1_1 1-1.png'
import image02 from '../../examples/ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png'
import image03 from '../../examples/ShopingCards/images/Web-_Product listing/Frame 1-5.png'
import image04 from '../../examples/ShopingCards/images/Web-_Product listing/Frame 1.png'


export interface IFollowUsData {
    
    heading:string;
    contents: string;
    imagedetails:Array<{ name: string; img: string }>;
}

export const FollowUsData :IFollowUsData = {

    heading:"Follow us on Instagram",
    contents:"@abc12ecommerce",
    imagedetails:[
    
    {
        name: "John Doe",
        img: `${images}`
    },
    {
        name: "Jane Smith",
        img: `${image02}`
    },
    {
        name: "Emily Johnson",
        img: `${image03}`
    },
    {
        name: "Michael Brown",
        img: `${image04}`
    }
]
};

