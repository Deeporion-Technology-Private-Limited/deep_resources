export interface IData {
    id: number,
    imgSrc: string,
    label: string,
    products?: Products[],
}

export interface breadCrumbsType {
    text: string
    iconUrl?: string
}

export const breadCrumbsData: breadCrumbsType[] = [{ text: 'Home' }, { text: 'Women' }]

export const optionsArray: string[] = ["Recommended", "Popular", "Price: Low-to-High", "Price: High-to-Low", "What's New", "Customer Rating", "Better Discount"]

export const chipsArray: string[] = ["Summers", "Winters", "Autumn", "Monsooon"]

interface Products {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number
}

export const Data: IData[] = [
    {
        id: 1,
        imgSrc: "https://www.pinklay.com/cdn/shop/files/OceanModalMaxiDress_1_800x.jpg?v=1714392157",
        label: "New Arrivals",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    {
        id: 2,
        imgSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Best Sellers",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    {
        id: 3,
        imgSrc: "https://www.pinklay.com/cdn/shop/files/RumiIndigoModalMaxiDress_4_1800x1800.jpg?v=1706680309",
        label: "Kaftans",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    {
        id: 4,
        imgSrc: "https://www.pinklay.com/cdn/shop/files/BonjourMaxiDress-Pinklay_1_1800x1800.jpg?v=1684936858",
        label: "Co-ords",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    {
        id: 5,
        imgSrc: "https://www.pinklay.com/cdn/shop/files/LoverBlackPolkaMaxiDress_1_1800x1800.jpg?v=1701687120",
        label: "Kurtas",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    {
        id: 6,
        imgSrc: "https://www.pinklay.com/cdn/shop/files/GaiaModalMaxiDress_4_800x.jpg?v=1712066219",
        label: "Robes",
        // products: [
        //     {
        //         id: 1,
        //         name: "Product 1",
        //         price: 100,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Product 2",
        //         price: 200,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     },
        //     {
        //         id: 3,
        //         name: "Product 3",
        //         price: 300,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 4
        //     },
        //     {
        //         id: 4,
        //         name: "Product 4",
        //         price: 400,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 2
        //     },
        //     {
        //         id: 5,
        //         name: "Product 5",
        //         price: 500,
        //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        //         quantity: 1
        //     }
        // ]
    },
    // {
    //     id: 7,
    //     imgSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     label: "Pajama sets",
    //     // products: [
    //     //     {
    //     //         id: 1,
    //     //         name: "Product 1",
    //     //         price: 100,
    //     //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     //         quantity: 1
    //     //     },
    //     //     {
    //     //         id: 2,
    //     //         name: "Product 2",
    //     //         price: 200,
    //     //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     //         quantity: 1
    //     //     },
    //     //     {
    //     //         id: 3,
    //     //         name: "Product 3",
    //     //         price: 300,
    //     //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     //         quantity: 4
    //     //     },
    //     //     {
    //     //         id: 4,
    //     //         name: "Product 4",
    //     //         price: 400,
    //     //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     //         quantity: 2
    //     //     },
    //     //     {
    //     //         id: 5,
    //     //         name: "Product 5",
    //     //         price: 500,
    //     //         image: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    //     //         quantity: 1
    //     //     }
    //     // ]
    // },

]