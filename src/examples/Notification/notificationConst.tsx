import { FindIconUrl } from "@/utils/Constant";
export interface singleNotification {
    profile?: string;
    title?: string;
    message?: string;
    arrivedtime?: string; 
    onclick?:() => void;
    isRead: boolean;
}

export interface NotificationProp {
    value?: singleNotification[]
}
export const notificationsObj: singleNotification[] = [
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:true,
        arrivedtime: "4d",
        onclick: () => alert("working")
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "4d"
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "4d"
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "4d"
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "4d"
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "4d"
    },
    {
        profile: FindIconUrl("profileImage.png"),
        title: "Megan-Customer support",
        message: "You have a new message",
        isRead:false,
        arrivedtime: "2d" 
    },
]