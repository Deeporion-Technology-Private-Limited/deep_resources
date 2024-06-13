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
        [SkeletonVariant.Text]: "rounded",
        [SkeletonVariant.Card]: "rounded-lg shadow-md p-4",
      },
      size: {
        [ButtonSize.Small]: "",
        [ButtonSize.Medium]: "",
        [ButtonSize.Large]: "",
      },
    },
    compoundVariants: [
      { variant: SkeletonVariant.Circle, size: ButtonSize.Small, class: "w-10 h-10" },
      { variant: SkeletonVariant.Circle, size: ButtonSize.Medium, class: "w-20 h-20" },
      { variant: SkeletonVariant.Circle, size: ButtonSize.Large, class: "w-40 h-40" },
      
      { variant: SkeletonVariant.Text, size: ButtonSize.Small, class: "w-16 h-4" },
      { variant: SkeletonVariant.Text, size: ButtonSize.Medium, class: "w-32 h-6" },
      { variant: SkeletonVariant.Text, size: ButtonSize.Large, class: "w-64 h-8" },
      
      { variant: SkeletonVariant.Card, size: ButtonSize.Small, class: "w-16 h-16" },
      { variant: SkeletonVariant.Card, size: ButtonSize.Medium, class: "w-32 h-32" },
      { variant: SkeletonVariant.Card, size: ButtonSize.Large, class: "w-64 h-64" },
    ],
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
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-2' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-24' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} />
      </div>
    </Elevation>
  );
};

export const SkeletonShoppingCard: React.FC = () => {
  return (
    <Elevation className='w-fit h-fit'>
      <div className="space-y-4 p-4 w-full">
        <Skeleton variant={SkeletonVariant.Card} size={ButtonSize.Large} />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Medium} className='h-6' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Small} className='h-4' />
        <Skeleton variant={SkeletonVariant.Circle} size={ButtonSize.Small} className='w-10 h-10' />
      </div>
    </Elevation>
  );
};

export const SkeletonLoginForm: React.FC = () => {
  return (
    <Elevation className='w-fit h-fit'>
      <div className="space-y-4 p-6">
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-10' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-10' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-10' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Large} className='h-10' />
        <div className='flex items-center justify-end gap-2'>
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Small} className='h-6' />
        <Skeleton variant={SkeletonVariant.Text} size={ButtonSize.Small} className='h-6' />
        </div>
      </div>
    </Elevation>
  );
};

export const SkeletonImage: React.FC = () => {
  return (
    <Elevation className='w-fit h-fit'>
      <div className="p-4 w-full">
        <Skeleton variant={SkeletonVariant.Card} size={ButtonSize.Large} />
      </div>
    </Elevation>
  );
};