import { Box, Button } from "@/components";
import { Profile } from ".";
import { ButtonIconPosition } from "@/components/Button/type";

const profileDetails = [
    {
        agentName: "Alex Matt",
        profileUrl: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
        agentName: "Lois Lane",
        profileUrl: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",

    },
    {
        agentName: "Clark Kent",

    },
    {
        agentName: "Ralph",

    },
    {
        agentName: "Henry",

    },
    {
        agentName: "Ray Sin",

    },
    {
        agentName: "Jack Aranda",

    },
    {
        agentName: "Simon Sais",

    },
    {
        agentName: "Stan Dupp",

    }
]


export const AgentDetails = [
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-amber-100 text-amber-600 px-5 text-center ">On the way</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-red-50 px-5 text-center text-[red] ">Cancelled</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    },
    {
        "Warehouse (Pickup)": "Malviya Nagar, Jaipur",
        "Date": "22/04/24",
        "Delivered To": "Tessa Rain",
        "Delivery Address": "1/0 Malviya Nagar",
        "Contact Number": "985674839",
        "Status": <Box className="rounded-2xl bg-green-50 text-green-600 px-5 text-center ">Delivered</Box>
    }
]

export const agents = [
    {
        "agent Name": <Profile data={profileDetails[0]} />,
        "Agent ID": "A0AAAAAA000A",
        "Contact Number": "9876543210",
        "Orders Completed": "10",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert()}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[1]} />,
        "Agent ID": "A0AAAAAA000B",
        "Contact Number": "9876543210",
        "Orders Completed": "7",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[2]} />,
        "Agent ID": "A0AAAAAA000c",
        "Contact Number": "9876543210",
        "Orders Completed": "2",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[3]} />,
        "Agent ID": "A0AAAAAA000d",
        "Contact Number": "9876543210",
        "Orders Completed": "0",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[4]} />,
        "Agent ID": "A0AAAAAA000e",
        "Contact Number": "9876543210",
        "Orders Completed": "3",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[5]} />,
        "Agent ID": "A0AAAAAA000f",
        "Contact Number": "9876543210",
        "Orders Completed": "5",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[6]} />,
        "Agent ID": "A0AAAAAA000g",
        "Contact Number": "9876543210",
        "Orders Completed": "8",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[7]} />,
        "Agent ID": "A0AAAAAA000h",
        "Contact Number": "9876543210",
        "Orders Completed": "9",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    },
    {
        "agent Name": <Profile data={profileDetails[8]} />,
        "Agent ID": "A0AAAAAA000i",
        "Contact Number": "9876543210",
        "Orders Completed": "2",
        "Address": "1/0 Malviya Nagar, Jaipur, India",
        "": <Button
            className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
            iconPosition={ButtonIconPosition.Right}
            iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
            onClick={() => alert("Viewing Details")}>View Details
        </Button>
    }
];
