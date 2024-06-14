import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box, Text } from "@/components";
import { Topnavbar } from "@/components/Header/TopNavbar";
import { NavbarDirection } from "@/components/Header/type";
import Carousel from "@/components/CarouselSlider";
const dashboardStyles = cva(
  [

  ],
  {
    variants: {

    },
  }
);

type DashboardProps = ComponentProps<"div"> & VariantProps<typeof dashboardStyles> & {
  children?: React.ReactNode;
};

export const Dashboard = forwardRef<HTMLDivElement, DashboardProps>(
  ({ className, children, ...props }, ref) => {


    return (
      <Box
        ref={ref}
        className={cn(dashboardStyles({}), className)}
        {...props}
      >
        <Box>
          <Topnavbar
            direction={NavbarDirection.Row}
            isSearch
            navBarIcons={[
              {
                icon: '/src/components/Header/navbarIcons/person.svg',
                iconName: 'Log in'
              },
              {
                icon: '/src/components/Header/navbarIcons/notification.svg'
              },
              {
                icon: '/src/components/Header/navbarIcons/favorite.svg'
              },
              {
                icon: '/src/components/Header/navbarIcons/shoping_cart.svg'
              },
              {
                icon: '/src/components/Header/navbarIcons/settings.svg'
              }
            ]}
            navItem={[
              {
                href: '/',
                text: 'Home'
              },
              {
                href: '/women',
                text: 'Women'
              },
              {
                href: '/kid',
                text: 'Kids'
              },
              {
                href: '/giftCard',
                text: 'Gift Cards'
              }
            ]}
            profilePicture="/src/components/Header/navbarIcons/image.png"
            title="Logo"
          />
        </Box>
        <Box className="pt-[1.25rem]">
          <Carousel
            className="max-w-6xl"
            items={[
              {
                button: {
                  label: 'Learn More',
                  onClick: () => { }
                },
                heading: 'First Slide Heading',
                headingClassName: 'text-3xl font-bold text-yellow-300',
                image: 'https://img.lovepik.com/background/20211022/large/lovepik-taobao-tmall-e-commerce-banner-background-image_500603827.jpg',
                text: 'Centered Text on First Slide',
                textClassName: 'text-lg'
              },
              {
                button: {
                  label: 'Shop Now',
                  onClick: () => { }
                },
                heading: 'Second Slide Heading',
                headingClassName: 'text-3xl font-bold text-green-300',
                image: 'https://t3.ftcdn.net/jpg/04/86/29/98/360_F_486299886_4aXrDh0LPy7BK4SUJvhCkKpnnExNDsLX.jpg',
                text: 'Centered Text on Second Slide',
                textClassName: 'text-lg'
              },
              {
                button: {
                  label: 'Contact Us',
                  onClick: () => { }
                },
                heading: 'Third Slide Heading',
                headingClassName: 'text-3xl font-bold text-blue-300',
                image: 'https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg',
                text: 'Centered Text on Third Slide',
                textClassName: 'text-lg'
              }
            ]}
          />
        </Box>
        <Box className="pt-[5rem]">
          <Box>
            <Text className="text-xl font-bold">
              New Arrivals
            </Text>
          </Box>
          <Box className="pt-[1.25rem]">

          </Box>
        </Box>
      </Box>
    );
  }
);
