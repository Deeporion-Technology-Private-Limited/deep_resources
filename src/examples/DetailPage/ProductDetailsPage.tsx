import detailsimage from "../../images/detailsimage.png";
import ProductCard from "../DetailPage/ProductCard";
import { FooterCart } from "../FooterCart";
import Cards from "../ShopingCards";
import { productData } from "./ProductDetailsData";
import { NavbarDirection } from "@/components/types";
import { BreadCrumb, TopHoverMenuCard, Topnavbar } from "@/components";
import { FindIconUrl } from "@/utils/Constant";

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <Topnavbar
          direction={NavbarDirection.Row}
          isLogin
          isSearch
          navBarIcons={[
            {
              icon: FindIconUrl("person.svg"),
              iconName: "Logo",
            },
            {
              icon: FindIconUrl("favorite.svg"),
            },
            {
              icon: FindIconUrl("notification.svg"),
            },
            {
              icon: FindIconUrl("shoping_cart.svg"),
            },
            {
              icon: FindIconUrl("settings"),
            },
          ]}
          navItem={[
            {
              component: (
                <TopHoverMenuCard
                  TopHoverMenuItem={[
                    {
                      className: "pl-[0px]",
                      heading: {
                        title: "Indian & Fusion wears",
                        titleColor: "#3F271E",
                        titleStyle: "text-[12px]",
                      },
                      innerLiClass: "mb-[5px]",
                      list: [
                        { href: "", name: "Kurtas & Suits" },
                        { href: "", name: "Kurtis, Tunics & Tops" },
                        { href: "", name: "Sarees" },
                        { href: "", name: "Leggings & Salwars" },
                        { href: "", name: "Skirts & Palazzos" },
                        { href: "", name: "Dress Materials" },
                        { href: "", name: "Dupattas & Shawls" },
                      ],
                    },
                    {
                      className: "pl-[0px]",
                      heading: {
                        title: "Western wears",
                        titleColor: "#3F271E",
                        titleStyle: "text-[12px]",
                      },
                      innerLiClass: "mb-[5px]",
                      list: [
                        { href: "", name: "Dresses" },
                        { href: "", name: "Tops & Tshirts" },
                        { href: "", name: "Jeans" },
                        { href: "", name: "Trousers & Capris" },
                        { href: "", name: "Co-ords" },
                        { href: "", name: "Jackets & Coats" },
                        { href: "", name: "Sweaters & Sweatshirts" },
                      ],
                    },
                    {
                      className: "pl-[0px]",
                      heading: {
                        title: "Footwears",
                        titleColor: "#3F271E",
                        titleStyle: "text-[12px]",
                      },
                      innerLiClass: "mb-[5px]",
                      list: [
                        { href: "", name: "Flats" },
                        { href: "", name: "Casual Shoes" },
                        { href: "", name: "Heels" },
                        { href: "", name: "Boots" },
                        { href: "", name: "Sports Shoes & Floaters" },
                      ],
                    },
                    {
                      className: "pl-[0px]",
                      heading: {
                        title: "Sleepwear & Loungewear",
                        titleColor: "#3F271E",
                        titleStyle: "text-[12px]",
                      },
                      innerLiClass: "mb-[5px]",
                      list: [
                        { href: "", name: "Night suits" },
                        { href: "", name: "Swimwear" },
                        { href: "", name: "Thermals" },
                      ],
                    },
                  ]}
                  title="Categories"
                />
              ),
              href: "/",
              text: "Home",
            },
            {
              component: (
                <TopHoverMenuCard
                  TopHoverMenuItem={[
                    {
                      className: "pl-[0px] min-w-[135px]",
                      heading: { title: "Girs", titleColor: "#3F271E" },
                      innerLiClass: "mb-[5px] text-[14px]",
                      list: [
                        { href: "", name: "All Boys" },
                        { href: "", name: "Shirts" },
                        { href: "", name: "Kurtas" },
                        { href: "", name: "Pants & Shorts" },
                        { href: "", name: "Indian Wear" },
                        { href: "", name: "Resort Wear" },
                      ],
                    },
                    {
                      className: "pl-[0px] min-w-[135px]",
                      heading: { title: "Boys", titleColor: "#3F271E" },
                      innerLiClass: "mb-[5px] text-[14px]",
                      list: [
                        { href: "", name: "All Girls" },
                        { href: "", name: "Dresses" },
                        { href: "", name: "Indian Wear" },
                        { href: "", name: "Pajama Sets" },
                        { href: "", name: "Resort wear" },
                        { href: "", name: "Pyjama sets" },
                      ],
                    },
                    {
                      className: "pl-[0px] min-w-[135px]",
                      heading: { title: "Baby", titleColor: "#3F271E" },
                      innerLiClass: "mb-[5px] text-[14px]",
                      list: [
                        { href: "", name: "All Baby" },
                        { href: "", name: "Daily Wear" },
                        { href: "", name: "Indian Wear" },
                        { href: "", name: "Winter Wear" },
                        { href: "", name: "Vacation Wear" },
                      ],
                    },
                  ]}
                  listStyle="gap-[30px] py-[0px]"
                />
              ),
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
      </div>
      <div className="flex items-center gap-2 py-4">
        <BreadCrumb
          breadCrumbItems={[
            {
              href: "/home",
              text: "Home",
            },
            {
              href: "/women",
              text: "Women",
            },
            {
              href: "/dresses",
              text: "Dresses",
            },
            {
              href: "/mango",
              text: "Mango/ Women Navy blue empire dress",
            },
          ]}
          defaultSeparatorIconUrl="/src/components/BreadCrumb/icon/RightArrow.svg"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 py-4">
        <div className="w-full md:w-1/2">
          <img
            src={detailsimage}
            alt="Product"
            className="h-auto w-full max-h-[812px] sticky top-0"
          />
        </div>
        <div className="w-full md:w-1/2">
          <ProductCard data={productData} />
        </div>
      </div>
      <div className="py-4">
        <Cards
          item={[
            {
              des: "Black Sleevless Crepe Dress",
              id: 1,
              imagesSrc: "/src/examples/ShopingCards/images/Web-_Product%20listing/3897062800_1_1_1%201-1.png",
              price: 900,
              rating: 4,
              title: "Mango",
            },
            {
              des: "Black Sleevless Crepe Dress",
              id: 2,
              imagesSrc: "/src/examples/ShopingCards/images/Web-_Product%20listing/3897062800_1_1_1%201.png",
              price: 900,
              rating: 3,
              reviews: 176,
              title: "Mango",
            },
            {
              des: "Black Sleevless Crepe Dress",
              id: 3,
              imagesSrc: "/src/examples/ShopingCards/images/Web-_Product%20listing/Frame%201-1.png",
              price: 900,
              rating: 2,
              reviews: 274,
              title: "Mango",
            },
          ]}
        />
      </div>
      <div>
        <FooterCart
          footerCopyRights={{
            copyright: "© 2024 All rights reserved",
            copyrightBgStyle: "bg-[#3F271E]",
            copyrightTextStyle: "text-[#fff]",
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
