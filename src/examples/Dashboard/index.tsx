import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState, useEffect } from "react";
import { AutoCarousel, Banner, Box, Carousel, DefaultButton, FavouriteCard, ReviewCard, SingleIconButton, Text, TopNavbar } from "@/components";
import { NavbarDirection } from "@/components/types";
import { CardData, CategoryItem, ReviewData } from "./data";
import Influencive from "../../images/Influencive.svg";
import Dailyhunt from "../../images/Dailyhunt.svg";
import Deccan from "../../images/Deccan.svg";
import ETimes from "../../images/ETimes.svg";
import Ent from "../../images/Ent.svg";
import BannerImages from "../../images/BannerImages.svg";
import Banner1 from "../../images/Banner1.svg";
import { ButtonVariant } from "@/components/types";
import { FollowPage } from "../FollowUsPage";
import { FooterCart } from "../FooterCart";
import { FindIconUrl } from "@/utils/Constant";

const dashboardStyles = cva(["w-full"]);

type DashboardProps = ComponentProps<"div"> &
  VariantProps<typeof dashboardStyles> & {
    children?: React.ReactNode;
  };

export const Dashboard = forwardRef<HTMLDivElement, DashboardProps>(
  ({ className, children, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const groupedReviewData = [];
    for (let i = 0; i < ReviewData.length; i += 3) {
      groupedReviewData.push(ReviewData.slice(i, i + 3));
    }

    const totalSlides = groupedReviewData.length;

    useEffect(() => {
      if (totalSlides > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
      }
    }, [totalSlides]);

    const handleDotClick = (index: number) => {
      setCurrentIndex(index);
    };

    return (
      <Box
        ref={ref}
        className={cn(dashboardStyles({}), className)}
        {...props}
      >
        <Box className="w-full flex justify-center">
          <TopNavbar
            direction={NavbarDirection.Row}
            className="max-w-[90rem]"
            isSearch
            navBarIcons={[
              { icon: FindIconUrl('PersonOutline.svg'), iconName: 'Log in' },
              { icon: FindIconUrl('OutlineNotifications.svg') },
              { icon: FindIconUrl('favorite.svg') },
              { icon: FindIconUrl('OutlineShoppingCart.svg') },
              { icon: FindIconUrl('OutlineSettings.svg') }
            ]}
            navItem={[
              { href: '/', text: 'Home' },
              { href: '/women', text: 'Women' },
              { href: '/kid', text: 'Kids' },
              { href: '/giftCard', text: 'Gift Cards' }
            ]}
            profilePicture={FindIconUrl("profileImage.png")}
            title="Logo"
          />
        </Box>
        <Box className="pt-[1.25rem] w-full flex justify-center">
          <Carousel
            className="max-w-[90rem]"
            items={[
              {
                button: { label: 'Learn More', onClick: () => alert('Learn More!') },
                heading: 'First Slide Heading',
                headingClassName: 'text-3xl font-bold text-yellow-300',
                image: 'https://img.lovepik.com/background/20211022/large/lovepik-taobao-tmall-e-commerce-banner-background-image_500603827.jpg',
                text: 'Centered Text on First Slide',
                textClassName: 'text-lg'
              },
              {
                button: { label: 'Shop Now', onClick: () => alert('Shop Now!') },
                heading: 'Second Slide Heading',
                headingClassName: 'text-3xl font-bold text-green-300',
                image: 'https://t3.ftcdn.net/jpg/04/86/29/98/360_F_486299886_4aXrDh0LPy7BK4SUJvhCkKpnnExNDsLX.jpg',
                text: 'Centered Text on Second Slide',
                textClassName: 'text-lg'
              },
              {
                button: { label: 'Contact Us', onClick: () => alert('Contact Us!') },
                heading: 'Third Slide Heading',
                headingClassName: 'text-3xl font-bold text-blue-300',
                image: 'https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg',
                text: 'Centered Text on Third Slide',
                textClassName: 'text-lg'
              }
            ]}
          />
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[82.5rem] flex justify-center pt-[5rem]">
            <Box className="w-[100vw] flex flex-wrap justify-between">
              <Text className="text-xl text-start font-bold pb-[1.25rem]">New Arrivals</Text>
              {CardData.map((data, index) => (
                <FavouriteCard
                  key={index}
                  imageSrc={data.imageSrc}
                  description={data.description}
                  brand={data.brand}
                  isnew={data.isnew}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="mt-[5.4rem] max-w-[33.81rem]  flex justify-center">
            <Box className="w-[100vw] flex flex-col gap-[6px] divide-y-[3px] divide-[#BFA59A]">
              <Text className="text-3xl font-bold text-center">Featured in</Text>
              <Text className="text-base font-normal py-[6px] text-center">
                Brands where our product has been featured
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center mt-[1.125rem]">
          <Box className="flex justify-center">
            <AutoCarousel
              className="max-w-[82.5rem]"
              items={[
                { id: 1, name: 'Influencive', logoUrl: Influencive },
                { id: 2, name: 'Dailyhunt', logoUrl: Dailyhunt },
                { id: 3, name: 'Deccan Chronicle', logoUrl: Deccan },
                { id: 4, name: 'ETimes', logoUrl: ETimes },
                { id: 5, name: 'Ent', logoUrl: Ent },
              ]}
            />
          </Box>
        </Box>

        <Box className="w-full flex justify-center">
          <Box className="mt-[5rem] max-w-[82.5rem] flex justify-center">
            <Banner
              boxStyle="h-[50%] p-5 flex w-[80%] flex-col text-white gap-4 justify-center items-center bg-[#3E2E28B2]"
              buttonClass="flex justify-center w-max text-2xl"
              buttonText="Explore more"
              className="h-[25rem] w-[100vw]"
              description="Sleek, Modern and Classic"
              descriptionClass="flex justify-center w-max font-normal text-2xl"
              iconUrl="/src/components/Cards/icons/image.svg"
              imageSrc={BannerImages}
              title="Exclusive Kids Wear Collection"
              titleClass="flex justify-center font-extrabold leading-10 text-3xl"
            />
          </Box>
        </Box>

        <Box className="w-full flex justify-center">
          <Box className="mt-[5.4rem] max-w-[33.81rem]  flex justify-center">
            <Box className="w-[100vw] flex flex-col gap-[6px] divide-y-[3px] divide-[#BFA59A]">
              <Text className="text-3xl font-bold text-center">Our top Categories</Text>
              <Text className="text-base font-normal py-[6px] text-center">
                Explore our exclusive top categories
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className="w-full flex justify-center pt-[1.25rem] gap-[15px]">
          <Box className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-[15px]">

            <Box className="max-w-[37.75rem] flex justify-center mb-8">
              <Banner
                imageSrc={Banner1}
                boxStyle="h-full w-full flex flex-col justify-end text-white gap-2 p-10"
                titleClass="leading-10 text-2xl w-max flex"
                descriptionClass="flex justify-center w-max font-semibold text-3xl"
                buttonClass="flex justify-center w-max px-[10px] py-[16px] text-xl capitalize"
                className="w-[100vw] h-[37.1875rem]"
                buttonText="Explore more"
                title="HOME COLLECTION"
                description="Living & Decor"
              />
            </Box>

            <Box className="max-w-[82.5rem] grid md:grid-cols-1 lg:grid-cols-2 justify-center ">
              {CategoryItem.map((data, index) => (
                <Banner
                  key={index}
                  imageSrc={data.imageSrc}
                  boxStyle={data.boxStyle}
                  titleClass={data.titleClass}
                  descriptionClass={data.descriptionClass}
                  className={data.className}
                  buttonClass={data.buttonClass}
                  buttonText={data.buttonText}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box className="w-full flex justify-center">
          <Box className="mt-[5.4rem] max-w-[33.81rem]  flex justify-center">
            <Box className="w-[100vw] flex flex-col gap-[6px] divide-y-[3px] divide-[#BFA59A]">
              <Text className="text-3xl font-bold text-center">Client Reviews</Text>
              <Text className="text-base font-normal py-[6px] text-center">
                What my Clients say about me
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className="w-full h-full flex justify-center relative">
          
          <Box className="w-[82.375rem] overflow-hidden relative">  
            <Box
              className="flex flex-wrap transition-transform duration-500"
              style={{
                width: `${groupedReviewData.length * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / groupedReviewData.length}%)`,
              }}
            >
              {groupedReviewData.map((group, slideIndex) => (
                <Box
                  key={slideIndex}
                  className=" w-full justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:flex"
                  style={{ width: `${100 / groupedReviewData.length}%` }}
                >
                  {group.map((data, index) => (
                    <Box
                      key={index}
                      className="w-[27.375rem] flex justify-center"
                    >
                      <Box className="w-[100vw] flex justify-center">

                      <ReviewCard
                        StarRating={data.StarRating}
                        avatar={data.avatar}
                        avatarImage={data.avatarImage}
                        imageStyle={data.imageStyle}
                        rating={data.rating}
                        reviewText={data.reviewText}
                        reviewerName={data.reviewerName}
                        starStyle={data.starStyle}
                        textStyle={data.textStyle}
                        className={data.className}
                      />
                    </Box>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center mt-[30px]">
          <DefaultButton
            variant={ButtonVariant.DefaultPrimary}
            hover={true}
            className="w-fit"
          >
            View more
          </DefaultButton>
        </Box>
        {ReviewData.length > 3 && (
          <Box className="w-full flex justify-center mt-[30px]">
            <Box className="flex justify-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <SingleIconButton
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 p-0 rounded-full mx-1 ${currentIndex === index ? "bg-[#3F271E]" : "bg-[#C9CDD2]"
                    }`}
                ></SingleIconButton>
              ))}
            </Box>
          </Box>
        )}
        <Box className="w-full h-full flex flex-wrap justify-center mt-[30px]">
          <Box className="w-[82.5rem] flex justify-center">
            <Box className="w-[100vw]">
              <FollowPage />
            </Box>
          </Box>
        </Box>
        <Box className="w-full mt-[27px] flex justify-center">
          <Box className="w-[100vw] flex justify-center">
          <FooterCart
            className="mt-[27px]"
            footerCopyRights={{
              copyright: '2024 All rights reserved',
              copyrightBgStyle: 'bg-[#3F271E]',
              copyrightTextStyle: 'text-[#fff]'
            }}
          />
          </Box>
        </Box>
      </Box>
    );
  }
);
