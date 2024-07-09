import { Box, Button } from "@/components";
import { ComponentProps, forwardRef, useState } from "react";
import { ButtonIconPosition } from "@/components/Button/type";
import { ICards, ILabels } from "./data";
import { cn } from "@/utils";
import FaverateCard from "@/components/Cards/FaverateCard";
import { FindIconUrl } from "@/utils/Constant";

type GiftCardProps = ComponentProps<typeof Box> & {
    cardsArray: ICards[];
    labelsArray: ILabels[];
    addNew?: () => void;
    viewMore?: () => void;
    className?: string;
};

const GiftCard = forwardRef<HTMLDivElement, GiftCardProps>(
    ({ cardsArray, labelsArray, addNew, viewMore, className, ...props }, ref) => {
        const [activeLabel, setActiveLabel] = useState<string | null>(null);

        const filterCardsByLabel = (cards: ICards[], label: string) => {
            return cards.filter(card =>
                card.category.toLowerCase() === label.toLowerCase()
            );
        };

        const handleLabelClick = (label: ILabels) => {
            setActiveLabel(label.value);
        };

        const filteredCards = activeLabel
            ? filterCardsByLabel(cardsArray, activeLabel)
            : cardsArray;

        const addCircleOutline = FindIconUrl("AddCircleOutline.svg");

        return (
            <Box ref={ref} className={cn("flex flex-col gap-8 px-8", className)} {...props}>
                <Box className="flex gap-5 items-center w-full p-1 flex-wrap">
                    {labelsArray.map((label) => (
                        <Button
                            key={label.id}
                            className={cn("rounded-3xl w-fit capitalize bg-[#E8EBED] text-[#72787F]", {
                                "bg-[#3F271E] text-white": activeLabel === label.value,
                            })}
                            onClick={() => handleLabelClick(label)}
                        >
                            {label.value}
                        </Button>
                    ))}
                    <Button
                        className="w-fit h-8 bg-transparent text-black"
                        iconPosition={ButtonIconPosition.Right}
                        iconUrl="src/components/BreadCrumb/icon/RightArrow.svg"
                        onClick={viewMore}
                    >
                        View More
                    </Button>
                </Box>
                <Box className="items-start justify-center gap-5 py-1 inline-flex flex-wrap">
                    {filteredCards.length > 0 ? filteredCards?.map((item) => (
                        <FaverateCard
                            key={item.id}
                            className="h-fit"
                            imageSrc={item?.img}
                        />
                    )) : "No data present"}
                </Box>
                <Box className="flex justify-end">
                    <Button onClick={addNew} className="w-fit h-10" iconUrl={addCircleOutline}>
                        Add New
                    </Button>
                </Box>
            </Box>
        );
    }
);

export default GiftCard;
