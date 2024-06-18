import { Submenu } from "../MenuItem/index.stories";

export enum NavbarDirection {
  Row = "row",
  Column = "column",
}

const navItem = [
  {
    item: "about",
    submenu: [
      { item: "aobut 1", path: "/about1" },
      { item: "about 2", path: "/about1"  },
      { item: "about 3", path: "/about1"  },
      {
        item: "about 4",
        Submenu: [
          { item: "aobut 4 for 1" , path: "/about1" },
          { item: "aobut 4 for 2" , path: "/about1"  },
          { item: "aobut 4 for 3", Submenu: [{ item: "aobut 4 for 3 for 1" , path: "/about1" }] },
        ],
      },
    ],
  },
  {
    item: "cart",
    path: "/cart"
    
  },

  {
    item: "product",
    submenu: [
      { item: "aobut 1", path: "/about1"  },
      { item: "about 2", path: "/about1"  },
      
    ],
    
  },
];
