import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../utils";
import { Box } from "../Layout";
import { Link } from "react-router-dom";


const breadCrumbStyles = cva([
  "flex",
  "items-center",
]);

type BreadCrumbItem = {
  text: string | undefined;
  iconUrl?: string;
  separatorIconUrl?: string;
  href?: any;
  onClick?: () => void;
};

type BreadCrumbProps = ComponentProps<"div"> & VariantProps<typeof breadCrumbStyles> & {
  breadCrumbItems?: BreadCrumbItem[];
  defaultSeparatorIconUrl?: string;
};

export const BreadCrumb = React.forwardRef<HTMLDivElement, BreadCrumbProps>(
  ({ className, breadCrumbItems = [], defaultSeparatorIconUrl, children, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleItemClick = (index: number, onClick?: () => void) => {
      setActiveIndex(index);
      if (onClick) {
        onClick();
      }
    };

    const handleShowAllClick = () => {
      setShowAll(true);
    };

    const renderBreadCrumbItem = (item: BreadCrumbItem, index: number) => (
      <div
        key={index}
        className="flex items-center"
        onClick={() => handleItemClick(index,item.onClick)}
      >
        {item.iconUrl && (
          <img src={item.iconUrl} alt={`${item.text} Icon`} className="p-2" />
        )}
       {item.onClick ? (
          <span
            className={cn(
              "cursor-pointer text-sm font-medium capitalize",
              className,
            )}
            style={{ color: activeIndex === index ? "#26282B" : "#72787F" }}
          >
            {item.text}
          </span>
        ) : (
          <Link
            to={item.href}
            className={cn("text-sm font-medium capitalize", className)}
            style={{ color: activeIndex === index ? "#26282B" : "#72787F" }}
          >
            {item.text}
          </Link>
        )}
        {index < breadCrumbItems.length - 1 && (
          <img src={item.separatorIconUrl || defaultSeparatorIconUrl} alt="Separator Icon" className="p-4" />
        )}
      </div>
    );

    return (
      <Box
        ref={ref}
        className={cn(breadCrumbStyles(), className)}
        {...props}
      >
        {breadCrumbItems.length > 5 && !showAll ? (
          <>
            {renderBreadCrumbItem(breadCrumbItems[0], 0)}
            <button onClick={handleShowAllClick} className="mx-2">
              ...
            </button>
            <img src={defaultSeparatorIconUrl} alt="Separator Icon" className="p-4" />
            {renderBreadCrumbItem(breadCrumbItems[breadCrumbItems.length - 1], breadCrumbItems.length - 1)}
          </>
        ) : (
          breadCrumbItems.map((item, index) => renderBreadCrumbItem(item, index))
        )}
        {children}
      </Box>
    );
  }
);
