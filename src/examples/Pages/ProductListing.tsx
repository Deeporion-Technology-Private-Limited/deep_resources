import { Box } from "@/components";
import { Topnavbar } from "@/components/Header/TopNavbar";
import Cards from "../ShopingCards";
import { demo } from "../ShopingCards/data";
import { AccordionBar } from "../AccordionBar";
import SortingCard from "../SortingCard";
import { FooterCart } from "../FooterCart";
import Pagination from "@/components/Pagination/PaginationBasic";
import { Color, Shape, Variants } from "@/components/Pagination/type";
import { CSSProperties, useState } from "react";
import { FindIconUrl } from "@/utils/Constant";

const ProductListing = () => {
  const [page, setPage] = useState(1);
  function change(page: number) {
    setPage(page);
  }
  console.log(page);

  return (
    <Box>
      <Box className="w-[100vw] fixed top-0 left-0 z-50 bg-white">
        <Topnavbar
          isSearch
          navBarIcons={[
            { icon: FindIconUrl("PersonOutline.svg"), iconName: "Logo" },
            { icon: FindIconUrl("OutlineNotifications.svg") },
            { icon: FindIconUrl("favorite.svg") },
            { icon: FindIconUrl("OutlineShoppingCart.svg") },
            { icon: FindIconUrl("OutlineSettings.svg") },
          ]}
          navItem={[
            {
              href: "/",
              text: "Home",
            },
            {
              href: "/about",
              text: "About",
            },
            {
              href: "/contact",
              text: "Contact",
            },
          ]}
          profilePicture={FindIconUrl("profileImage.png")}
          title="Logo"
        />
      </Box>

      <Box className="flex h-full">
        <Box className="no-scroll pl-7" style={sidebarStyle}>
          <AccordionBar />
        </Box>
        <Box className="scroll" style={contentStyle}>
          <SortingCard
            className="mt-[4rem]"
            breadCrumbs={[
              {
                text: "Home",
              },
              {
                text: "Women",
              },
            ]}
            breadCrumbIcon="/src/components/BreadCrumb/icon/RightArrow.svg"
            chips={["Summers", "Winters", "Autumn", "Monsooon"]}
            data={[
              {
                id: 1,
                imgSrc:
                  "https://www.pinklay.com/cdn/shop/files/OceanModalMaxiDress_1_800x.jpg?v=1714392157",
                label: "New Arrivals",
              },
              {
                id: 2,
                imgSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
                label: "Best Sellers",
              },
              {
                id: 3,
                imgSrc:
                  "https://www.pinklay.com/cdn/shop/files/RumiIndigoModalMaxiDress_4_1800x1800.jpg?v=1706680309",
                label: "Kaftans",
              },
              {
                id: 4,
                imgSrc:
                  "https://www.pinklay.com/cdn/shop/files/BonjourMaxiDress-Pinklay_1_1800x1800.jpg?v=1684936858",
                label: "Co-ords",
              },
              {
                id: 5,
                imgSrc:
                  "https://www.pinklay.com/cdn/shop/files/LoverBlackPolkaMaxiDress_1_1800x1800.jpg?v=1701687120",
                label: "Kurtas",
              },
              {
                id: 6,
                imgSrc:
                  "https://www.pinklay.com/cdn/shop/files/GaiaModalMaxiDress_4_800x.jpg?v=1712066219",
                label: "Robes",
              },
            ]}
            options={[
              "Recommended",
              "Popular",
              "Price: Low-to-High",
              "Price: High-to-Low",
              "What's New",
              "Customer Rating",
              "Better Discount",
            ]}
            title="Women"
            onClick={function (_data: any): void {
              throw new Error("Function not implemented.");
            }}
            images={[]}
            labels={[]}
          />

          <Cards item={demo} />
        </Box>
      </Box>
      <Box className="w-full flex justify-center py-5">
        <Pagination
          totalPages={10}
          currentPage={page}
          onPageChange={change}
          variant={Variants.Outlined}
          activeColor={Color.Brown}
          className="ml-36 w-20"
          customButtonSize="2rem"
          iconStyle="size-2  max-w-none"
          shape={Shape.Square}
        />
      </Box>

      <Box>
        <FooterCart
          footerCopyRights={{
            copyright: "© 2024 All rights reserved",
            copyrightBgStyle: "bg-[#3F271E]",
            copyrightTextStyle: "text-[#fff]",
          }}
        />
      </Box>
    </Box>
  );
};

const sidebarStyle: CSSProperties = {
  position: "sticky",
  top: "6.25rem",
  left: 0,
  height: "100%",
  width: "250px",
};

const contentStyle: CSSProperties = {
  marginLeft: "2rem",
  overflowY: "auto",
  height: "100vh",
};

export default ProductListing;
