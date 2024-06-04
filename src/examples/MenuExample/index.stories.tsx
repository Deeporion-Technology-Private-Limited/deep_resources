import { Meta, StoryObj } from "@storybook/react";
import { ContextMenuItem } from ".";

const meta: Meta<typeof ContextMenuItem> = {
    title: "Examples/Context Menu",
    component: ContextMenuItem,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = {};

// import { MenuItem } from "@/components/ContextMenu/MenuItem";
// import { LeftIcon, RightIcon } from "@/components/ContextMenu/MenuItem/Icon/icon";
// import { Meta, StoryObj } from "@storybook/react";
// import { Menu } from ".";


// const meta: Meta<typeof Menu> = {
//     title: "Examples/Menu",
//     component: Menu,
//     parameters: {
//         layout: "centered",
//     },
// };

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const MenuItems: Story = {
//     args: {
//         children: (
//             <>
//                 <MenuItem
//                     label="Print packing slip"
//                     size="md"
//                     className="bg-inherit items-center justify-center border shadow"
//                 />
//                 <MenuItem
//                     label="View return/refund status"
//                     size="md"
//                     className="bg-inherit items-center justify-center border shadow"

//                 />

//                 <MenuItem
//                     label="Leave seller feedback"
//                     size="md"
//                     className="bg-inherit items-center justify-center border shadow"


//                 />

//                 <MenuItem
//                     label="Leave delivery feedback"
//                     size="md"
//                     className="bg-inherit items-center justify-center border shadow"


//                 />

//                 <MenuItem
//                     label="Write product review"
//                     size="md"
//                     className="bg-inherit items-center justify-center border shadow"


//                 />
//             </>

//         ),
//         label: "View return label and instructions"
//     }
// }