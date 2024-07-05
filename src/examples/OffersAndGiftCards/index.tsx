import { Box, Button, Text } from '@/components'
import Tabs from '@/components/Tabs'
import { cn } from '@/utils'
import { ButtonIconPosition } from '@/components/Button/type'
import React, { ComponentProps, forwardRef, useState } from 'react'
import { ICards, ILabels } from '../GiftCards/data'
import FaverateCard from '@/components/Cards/FaverateCard'
import GiftCard from '../GiftCards'


type OffersAndGiftCardsProps = ComponentProps<typeof Box> & {
    labelsData: ILabels[];
    cardsData: ICards[];
    discountLabels: ILabels[];
    discountCards: any[];
    handleNew?: () => void;

};

const DiscountsAndOffers: React.FC<{ labels: ILabels[]; cards: any[]; handleNew: any }> = ({ labels, cards ,handleNew}) => {
    const [activeLabel, setActiveLabel] = useState<string | null>(null);


    const handleLabelClick = (label: ILabels) => {
        setActiveLabel(label.value);
    };



    return (
        <Box className='flex flex-col gap-5'>
            <Box className="flex gap-5 items-center w-full p-1 flex-wrap">
                {labels?.map((label) => (
                    <Button
                        key={label.id}
                        className={cn("rounded-3xl w-fit capitalize bg-[#EBE3E0] text-[#3F271E]", {
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
                >
                    View More
                </Button>
            </Box>
            <Box className="grid xl:grid-cols-4 gap-5 w-full lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
                {cards?.map((cardItem) => (
                    <FaverateCard
                        key={cardItem?.id}
                        className="p-5"
                        imageSrc={cardItem?.imageSrc}
                        imageStyle="rounded-lg w-full"
                    >
                        <React.Fragment key=".0">
                            <Box className="p-2 flex flex-col gap-2">
                                <Text
                                    as="p"
                                    className="font-extrabold text-2xl loading-normal"
                                >
                                    {cardItem?.price}
                                </Text>
                                <Box className="flex w-max gap-2">
                                    <Text>{cardItem?.coupanCode}</Text>
                                    <img src="/src/components/Cards/icons/copy.svg" />
                                </Box>
                                <Text as="p">{cardItem?.expireDate}</Text>
                                <Box className="flex justify-between w-full">
                                    <Text className="bg-[#EBE3E0] w-max rounded-3xl p-2">
                                        {cardItem?.discount}
                                    </Text>
                                    <Button
                                        className="border-none w-max p-0 bg-transparent text-[#7D5D4F]"
                                        iconUrl='/src/components/Button/ButtonImage/AddItemVariant.svg'
                                    >
                                        Add Product
                                    </Button>
                                </Box>
                            </Box>
                        </React.Fragment>
                    </FaverateCard>
                ))}
            </Box>
            <Box className='flex w-full items-end justify-end pr-5'>
                <Button
                    className='w-fit'
                    iconUrl='/src/components/Button/ButtonImage/AddItem.svg'
                    onClick={handleNew}
                >
                    Add New
                </Button>
            </Box>
        </Box>
    )
}

export const OffersAndGiftCards = forwardRef<HTMLDivElement, OffersAndGiftCardsProps>(
    (
        {
            labelsData,
            cardsData,
            discountLabels,
            discountCards,
            handleNew,
            ...props
        }
    ) => {
        return (
            <Box className='flex ' {...props}>
                <Tabs
                    className=' p-10'
                    tabs={[
                        {
                            content: <DiscountsAndOffers labels={discountLabels} cards={discountCards} handleNew={handleNew}/>,
                            label: 'Discounts & Offers'
                        },
                        {
                            content: <GiftCard cardsArray={cardsData} labelsArray={labelsData} />,
                            label: 'Gift Cards'
                        },
                    ]}
                />
            </Box>
        )
    }
)
