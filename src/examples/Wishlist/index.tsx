import { Box, Button, Checkbox, FaverateCard, Headings, Modal, ProductCard, Text } from "@/components"
import { ICardDetails } from "./Data"
import { forwardRef, useState } from "react"
import { ButtonSize } from "@/components/types"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/utils"
import { FindIconUrl } from "@/utils/Constant"
import { DownArrow } from "@/components/MenuItem/Icon/icon"

const wishListStyles = cva([
  "w-full", 'flex', "flex-col", "gap-5",
])


interface WishlistProps extends VariantProps<typeof wishListStyles> {
  children?: React.ReactNode,
  title: string,
  data: ICardDetails[],
  onClick: (data: any) => void,
  sortingArray: string[],
  handleAddToCart: () => void,
  handleSorting: () => void,
  className: string,
}

const Wishlist = forwardRef<HTMLDivElement, WishlistProps>(
  (
    {
      children,
      title,
      data,
      onClick,
      handleAddToCart,
      sortingArray,
      handleSorting,
      className,
      ...props
    },
    ref) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [openModal, setOpenModal] = useState<number | string | null>();
    const [item, setItem] = useState<ICardDetails>();
    const [products, setProducts] = useState<ICardDetails[]>(data);
    const [length, setLength] = useState(data.length);

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      alert(value)
      return value;
    }

    const handleModal = (id: number) => {
      console.log("item vefor: ", item)
      const itemToFind = data.find((item) => item.id === id);
      console.log("itemto find", itemToFind);
      if (itemToFind) {
        setItem(itemToFind)
      }
      setOpenModal(id)
    }

    const handleCloseModal = () => {
      setOpenModal(null)
    }

    const handleRemove = (id: number) => {
      setOpenModal(null);
      const filteredProducts = products.filter((item) => item.id !== id);
      setProducts(filteredProducts)
      setLength(filteredProducts.length)
    }

    const addToCart = () => {
      handleAddToCart()
      setOpenModal(null);

    }

    const close = FindIconUrl("Close.svg")

    return (
      <Box ref={ref} className={cn({ className })} {...props}>
        <Box className="px-10">
          <Box className="flex justify-between ">
            <Box className="w-fit flex items-center justify-center sm:gap-2 gap-1 ">
              <Text as={"span"} className="text-zinc-800 sm:text-[26px] text-[14px] font-bold font-['Poppins']">Wishlist </Text>
              <Text as={"p"} className="text-zinc-400 text-wrap sm:text-xl font-normal text-[10px] font-['Poppins']"> {`${`(` + length + `)`}`} items</Text>
            </Box>
            <Box className="flex justify-end sm:gap-2 gap-1">
              <Text as={"p"} className="text-zinc-400 w-fit font-['Poppins'] sm:text-[20px] text-[14px] flex items-center">Sort by: </Text>
              <Box className="flex items-center justify-center gap-2 relative">
                <Text className="w-fit font-['Poppins'] sm:text-[20px] text-[14px]">Recently Added</Text>
                <Box className="w-fit h-fit cursor-pointer" onClick={handleDropdown}>
                  <DownArrow />
                </Box>

              </Box>
              {showDropdown &&
                <Box className="flex z-10 flex-col w-[16rem] px-5 py-4 rounded-lg bg-slate-50 shadow absolute mt-[45px]">
                  {sortingArray.map((label) =>
                    <Checkbox
                      key={label}
                      onChange={onChange}
                      type="checkbox" label={label} labelPosition="before" value={label} aria-label={label}
                      labelClassname="text-zinc-800 text-base font-normal font-['Poppins']" />)}
                  <Box className="flex w-full h-full pt-5 border-t-2 px-2 gap-2 ">
                    <Button
                      className=" h-fit bg-transparent text-[#3F271E]"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      Clear all
                    </Button>
                    <Button
                      hover
                      onClick={handleSorting}
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              }

            </Box>
          </Box>
          <Box className="grid lg:grid-cols-4 gap-5 w-full md:grid-cols-2 grid-cols-2 sm:grid-cols-1  shadow-xl pt-5">
            {products.length > 0 && products?.map((item) =>
              <FaverateCard
                className="px-2"
                key={item.id}
                brand={item.brand}
                isChange={() => handleModal(item.id)}
                description={item.description}
                favorite
                imageSrc={item.imageSrc}
                iconUrl={close}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                starRating
                isButton
                handleCart={handleAddToCart}
              />)}
          </Box>
          {openModal &&
            <Modal
              key={item?.id}
              button01={false}
              button02={false}
              modalbutton={false}
              onClose={handleCloseModal}
              openModal={true}
              crossIcon={true}
              header={<Box></Box>}
              children={<Box className="flex flex-col gap-10 w-full  h-full">
                <Box className="flex w-full  gap-6  border-[rgba(255, 255, 255, 1)]">
                  <Box>
                    <ProductCard
                      style={{ width: "120px", height: "140px" }}
                      imageClass="w-full h-full rounded-lg"
                      imageSrc={item?.imageSrc ? item.imageSrc : ""} />
                  </Box>
                  <Box className="flex w-full flex-col gap-4">
                    <Headings
                      FontSize="text-[24px]"
                      fontWeight="font-bold"
                      text="Remove from Wishlist" />{" "}
                    <Headings
                      fontWeight={"font-thin"}
                      FontSize="text-base"
                      text={"Are you sure you want to remove " + `${item?.brand ? `${`" ` + item.brand + ` "`}` : null}` + " from wishlist ?"} />
                  </Box>
                </Box>
                <Box className="flex w-full border-t-2 border-dotted py-4 px-10 justify-center items-center bg-white gap-4 ">
                  <Button size={ButtonSize.Large} onClick={() => handleRemove(item!.id)} className="flex-1 bg-gray-200 py-3 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2">
                    <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
                      Remove
                    </p>
                  </Button>
                  <Button
                    size={ButtonSize.Large}
                    className="flex-1 py-3 rounded-lg mr-2 flex justify-center items-center gap-2"
                    style={{
                      background: "linear-gradient(to right, #BFA59A, #3F271E)",
                    }}
                    onClick={addToCart}
                  >
                    <p className="text-white text-base font-semibold inline-block ml-2">
                      Move to cart
                    </p>
                  </Button>


                </Box>
              </Box>}
            />
          }
        </Box>

      </Box>
    )
  }
)

export default Wishlist