import { ReactNode } from "react";


export interface AdminProps {
    UsersData: { name: string, num: string }[],
    TableData:{ [key: string]: ReactNode; }[],
    PendingData:{ [key: string]: ReactNode; }[],
    DayOption:string[]
} 