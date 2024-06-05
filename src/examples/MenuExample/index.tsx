import { Menu, MenuItem } from "@/components"

export const ContextMenuItem = () => {
    return (
        <Menu label="View return label and instructions" className="font-bold" activeColor="bg-yellow-300">
            <MenuItem label="Print packing slip" border></MenuItem>
            <MenuItem label="View Return/Refund Status" border></MenuItem>
            <MenuItem label="Leave seller feedback" border></MenuItem>
            <MenuItem label="Leave delivery feedback" border></MenuItem>
            <MenuItem label="Write a product review" border></MenuItem>
        </Menu>
    )
}