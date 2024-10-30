import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../utils";
import { Box } from "../Layout";


const breadCrumbStyles = cva([
  "flex",
  "items-center",
]);

type BreadCrumbItem = {
  text: string;
  iconUrl?: string;
  separatorIconUrl?: string;
  href?: string;
};

type BreadCrumbProps = ComponentProps<"div"> & VariantProps<typeof breadCrumbStyles> & {
  breadCrumbItems?: BreadCrumbItem[];
  defaultSeparatorIconUrl?: string;
};

export const BreadCrumb = React.forwardRef<HTMLDivElement, BreadCrumbProps>(
  ({ className, breadCrumbItems = [], defaultSeparatorIconUrl, children, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleItemClick = (index: number) => {
      setActiveIndex(index);
    };

    const handleShowAllClick = () => {
      setShowAll(true);
    };

    const renderBreadCrumbItem = (item: BreadCrumbItem, index: number) => (
      <div
        key={index}
        className="flex items-center"
        onClick={() => handleItemClick(index)}
      >
        {item.iconUrl && (
          <img src={item.iconUrl} alt={`${item.text} Icon`} className="p-2" />
        )}
        <a
          href={item.href}
          className={cn("text-sm font-medium", className)}
          style={{ color: activeIndex === index ? '#26282B' : '#72787F' }}
        >
          {item.text}
        </a>
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
