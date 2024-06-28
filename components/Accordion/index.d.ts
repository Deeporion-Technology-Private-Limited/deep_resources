import { VariantProps } from 'class-variance-authority';
import { default as React, ComponentProps } from '../../../node_modules/react';
import { AccordionTypes } from './AccordionTypes';

declare const accordionStyle: (props?: ({
    variant?: AccordionTypes.Cursor | AccordionTypes.Arrow | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AccordionProps = ComponentProps<"div"> & VariantProps<typeof accordionStyle> & {
    variant?: AccordionTypes;
    children: any;
    content: any;
    Icon: React.ReactNode;
    childClassName?: string;
    status?: React.ReactNode;
    subChildren?: string;
};
declare const Accordion: React.ForwardRefExoticComponent<Omit<AccordionProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Accordion;
