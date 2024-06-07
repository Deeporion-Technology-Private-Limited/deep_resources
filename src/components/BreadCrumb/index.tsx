import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { Box } from "@/components";

const breadCrumbStyles = cva(
  [
    "flex",
    "items-center",
  ]
);

type BreadCrumbProps = ComponentProps<"div"> & VariantProps<typeof breadCrumbStyles> & {
  iconUrl: string;
  breadCrumbItems?: string[];
};

export const BreadCrumb = forwardRef<HTMLDivElement, BreadCrumbProps>(
  ({ iconUrl, className, breadCrumbItems = [], children, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <Box
        ref={ref}
        className={cn(breadCrumbStyles(), className)} 
        {...props}
      >
        {breadCrumbItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => handleItemClick(index)}
          >
            <span
              className={`breadcrumb-item ${className}`}
              style={{ color: activeIndex === index ? '#26282B' : '#72787F' }}
            >
              {item}
            </span>
            {index < breadCrumbItems.length - 1 && (
              <img src={iconUrl} alt="Icon" className="p-4" />
            )}
          </div>
        ))}
        {children}
      </Box>
    );
  }
);
