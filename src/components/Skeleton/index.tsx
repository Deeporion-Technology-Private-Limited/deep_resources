import React from 'react';
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Elevation } from '..';
import { ButtonSize, SkeletonVariant } from '../Button/type';



const skeletonStyles = cva(
  [
    "bg-gray-300",
    "animate-pulse",
  ],
  {
    variants: {
      variant: {
        [SkeletonVariant.Circle]: "rounded-full",
        [SkeletonVariant.Rectangle]: "rounded",
      },
      size: {
        [ButtonSize.Small]: "w-16 h-4",
        [ButtonSize.Medium]: "w-32 h-6",
        [ButtonSize.Large]: "w-64 h-8",
      },
    },
    defaultVariants: {
      size: ButtonSize.Medium,
    },
  }
);

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonStyles>;

export const Skeleton: React.FC<SkeletonProps> = ({ className, variant, size, ...props }) => {
  return (
    <div
      className={cn(skeletonStyles({ variant, size }), className)}
      {...props}
    />
  );
};

export const SkeletonLayout: React.FC = () => {
  return (
    <Elevation className='w-fit h-fit'>
      <div className="space-y-4 p-4 w-full">
        <Skeleton variant={SkeletonVariant.Circle} size={ButtonSize.Large} className='w-16 h-16' />
        <Skeleton variant={SkeletonVariant.Rectangle} size={ButtonSize.Large} className='h-2' />
        <Skeleton variant={SkeletonVariant.Rectangle} size={ButtonSize.Large} className='h-24' />
        <Skeleton variant={SkeletonVariant.Rectangle} size={ButtonSize.Large} />
      </div>
    </Elevation>
  );
};