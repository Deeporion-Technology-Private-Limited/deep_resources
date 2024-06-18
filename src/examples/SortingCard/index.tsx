import { Box, BreadCrumb, Button, Text } from "@/components"
import ProductCard from "@/components/Cards/ProductCards";
import Chips from "@/components/Chips";

const Data = [
    {
        id: 1,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "New Arrivals"
    },
    {
        id: 2,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Best Sellers"
    },
    {
        id: 3,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Kaftans"
    },
    {
        id: 4,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Co-ords"
    },
    {
        id: 5,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Kurtas"
    },
    {
        id: 6,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Robes"
    },
    {
        id: 7,
        imrSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
        label: "Pajama sets"
    },

]

const SortingCard = () => {
    return (
        <Box >
            <Box>
                <BreadCrumb
                    breadCrumbItems={[
                        {
                            text: 'Home'
                        },
                        {
                            text: 'Women'
                        },
                    ]}
                    defaultSeparatorIconUrl="/src/components/BreadCrumb/icon/RightArrow.svg"
                />
            </Box>
            <Box className="py-10">
                <Text className="font-bold pt text-[26px]">Women</Text>
                <Box className="flex gap-4 pt-10">
                    {Data.map((item) => (
                        <Box key={item.id} className="flex flex-col gap-[0.5rem]">
                            <ProductCard
                                imageClass="w-[10rem] h-[10rem] rounded-lg"
                                imageSrc={item.imrSrc} />
                            <Text className="pt-2 text-center">{item.label}</Text>
                        </Box>
                    ))}

                </Box>
            </Box>
            <Box className="flex justify-end">
                <Text as={"p"} className="text-zinc-400 w-fit">Sort by: </Text>
                <select>
                    <option>Recommended</option>
                    <option>Popular</option>
                </select>

            </Box>
            <Box className="flex gap-3 pt-4">
                <Chips
                    addRightIcon
                    size="lg"
                    className="rounded-xl w-30 h-8 bg-[#EBE3E0] text-[#3F271E]"
                    handleClick={() => alert("Clicked")}
                >
                    Summers
                </Chips>
                <Chips
                    addRightIcon
                    className="rounded-xl w-30 h-8 bg-[#EBE3E0] text-[#3F271E]"
                    size="lg"
                    handleClick={() => alert("Clicked")}
                >
                    Dresses
                </Chips>
                <Chips
                    addRightIcon
                    className="rounded-xl w-30 h-8 bg-[#EBE3E0]  text-[#3F271E]"
                    size="lg"
                    handleClick={() => alert("Clicked")}
                >
                    Mango
                </Chips>
                <Button className="bg-transparent text-zinc-400 w-[5rem] h-8 p-0 font-normal">clear all</Button>
            </Box>
        </Box>
    )
}

export default SortingCard;