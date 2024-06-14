import { Box,Button, Headings, Menu, MenuItem, Modal } from "@/components";
import { ButtonIconPosition,ButtonSize,ButtonVariant } from "@/components/Button/type";
import ProductCard from "@/components/Cards/ProductCards/Product_card";
// import { ProductCard } from "@/components/ProductCard";
import chart from "./Icons/chart.svg"
import hearticon from "./Icons/hearticon.svg"
import { TableHeader } from "@/components/Table/TableHeader";

export const Sizechartmodel = () => {
  
  return (
    <Modal
      button01 = {false}
      button02 = {false}
          modalbutton={true}
          onClose={() => { } } openModal={false}      
      header={<Box className="mb-3 flex   border-[rgba(255, 255, 255, 1)]">
        <Box>
          <ProductCard
            style={{ width: "56px", height: "56px" }}
            imageClass="w-full h-full rounded-lg"
            imageSrc="https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg" title={""} price={""} sizes={[]} />
        </Box>
        <Box className="p-2">
          <Headings FontSize="text-base" fontWeight="font-normal" text="Women Navy Blue Empire Dress" />{" "}
          <Headings fontWeight={"font-bold"} FontSize="text-base" text="Mango" />{" "}
        </Box>
      </Box>}
         >
          <Box className="flex justify-center mb-3">
            <button className="w-3/6 border-b pb-2 pt-2 hover:border-b-[#3F271E] hover:font-bold "> Size Chart  </button>
            <button className="w-3/6 border-b hover:border-b-[#3F271E] hover:font-bold">How to Measure</button>
          </Box>
      <TableHeader
        data={[
          ["XS", "35.0", "24.0", "13.0"],
          ["S", "37.0", "26.0", "13.5"],
          ["M", "39.0", "28.0", "14.0"],
          ["L", "41.0", "30.0", "14.5"],
          ["XL", "43.0", "32.0", "15.0"],
        ]}
        header={[
          "Size",
          "Hips(cm)",
          "To fit waist (cm)",
          "In Seam Length (cm)",
        ]}
        variant="solid"
      />
<Box className="flex mt-3">
<Button
  hover
  iconPosition={ButtonIconPosition.Left}
  iconUrl={chart}
  size={ButtonSize.Small}
  variant={ButtonVariant.DefaultPrimary}
  className="mr-1.5"
>
Add to Cart
</Button>
<Button
  hover
  iconPosition={ButtonIconPosition.Left}
  iconUrl={hearticon}
  size={ButtonSize.Small}
  variant={ButtonVariant.DefaultPrimary}
  className="ml-1.5"
>
Wishlist
</Button>
</Box>

    </Modal>
  );
};

