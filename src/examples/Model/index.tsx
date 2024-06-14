import { Box, Headings, Menu, MenuItem, Modal } from "@/components";
import ProductCard from "@/components/Cards/ProductCards/Product_card";
// import { ProductCard } from "@/components/ProductCard";
import { TableHeader } from "@/components/Table/TableHeader";

export const Sizechartmodel = () => {
  return (
    <Modal
      button01
      button02
      header={
        <Box className="mb-3 flex   border-[rgba(255, 255, 255, 1)]">
          <Box>
          <ProductCard
          style={{width:"56px", height:"56px"}}
              imageClass="w-full h-full rounded-lg"
              imageSrc="https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg" title={""} price={""} sizes={[]}/>
          </Box>
          <Box className="p-2">
          <Headings FontSize="text-base" fontWeight="font-normal" text="Women Navy Blue Empire Dress" />{" "}
          <Headings fontWeight={"font-bold"} FontSize="text-base" text="Mango" />{" "}
          </Box>
        </Box>
      }
      modalbutton
      onClose={() => {}}
    >
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
    </Modal>
  );
};

// <Modal
//   button01
//   button02
//   header={<Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]"><Headings FontSize="text-xl" fontWeight="font-bold" text="dssds"/>{' '}</Box>}
//   modalbutton
//   onClose={() => {}}
// >
//   <Box>
//     <Headings
//       FontSize="text-base"
//       fontWeight="font-normal"
//       text="Contents in the modals"
//     />
//   </Box>
// </Modal>
