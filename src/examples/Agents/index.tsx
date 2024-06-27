import { Box, Button, Text } from "@/components"
import { Table } from "@/components/Table/Table"
import { ComponentProps, forwardRef } from "react"
import { VariantProps } from "class-variance-authority"
import { ButtonIconPosition } from "@/components/Button/type"

type AgentsProps = ComponentProps<"div"> & VariantProps<typeof Box> & {
    data: [] | any;
}

export const Profile = ({ data }: any) => {

    return (
        <Box className="w-full h-full flex items-center justify-center gap-2">
            <img className="w-10 h-10 rounded-xl"
                src={data?.profileUrl ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"}
                alt={data.agentName} />
            <Text as="p">{data.agentName}</Text>
        </Box>
    )
}

export const Address = ({ address }: any) => {
    return (
        <Box className="flex w-fit gap-1 ">
            <Text as="p" className="w-fit">{address}</Text>
            <Button
                className="flex items-center justify-center bg-transparent text-black w-fit p-0 rounded-none "
                iconPosition={ButtonIconPosition.Right}
                iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
                onClick={() => alert("Viewing Details")}>View Details
            </Button>
        </Box>
    )
}


const Agents = forwardRef<HTMLAllCollection, AgentsProps>(
    (
        {
            data,
        }
    ) => {


        return (
            <Box className="w-full py-10" >
                <Table
                    className="text-black w-full py-2 "
                    tHeadStyle="w-fit h-20"
                    tDataStyle="h-20"
                    data={data}>
                </Table>
            </Box>
        )
    }
)


export default Agents