import { Box, Text } from "@/components";
import { Footer } from "@/components/Footer";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils";
import { CoreCustomerProps } from "@/components/types";

const topHoverStyle = cva(["w-full p-[20px] pb-[30px] border rounded-[8px]"]);

interface TopHoverMenuCardProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof topHoverStyle> {
  TopHoverMenuItem: CoreCustomerProps[];
  title?: string;
  headingStyle?: string;
  listStyle?: string;
}

export const TopHoverMenuCard = forwardRef<
  HTMLDivElement,
  TopHoverMenuCardProps
>(
  (
    {
      TopHoverMenuItem,
      title = "",
      headingStyle = "",
      listStyle = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(topHoverStyle())}
        {...props}>
        {title && (
          <Box>
            <Text
              as="h1"
              className={` ${headingStyle} text-[#3F271E] font-bold text-[14px]`}>
              {title}
            </Text>
          </Box>
        )}
        <Box
          className={` ${listStyle} gap-10 py-5 flex justify-between flex-wrap`}>
          {TopHoverMenuItem.map((item) => {
            return (
              <Footer
                key={item.heading?.title}
                children={item.children}
                className={item.className}
                heading={item.heading}
                description={item.description}
                services={item.services}
                links={item.links}
                list={item.list}
                newsLetter={item.newsLetter}
                footerTextColor={item.footerTextColor}
                customInnerBoxClass={item.customInnerBoxClass}
                innerClass={item.innerClass}
                innerLiClass={item.innerLiClass}
                innerUlClass={item.innerUlClass}
                data-testid="footer"
              />
            );
          })}
        </Box>
      </Box>
    );
  }
);
