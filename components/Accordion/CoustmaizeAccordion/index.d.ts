import { VariantProps } from 'class-variance-authority';
import { default as React, ComponentProps } from '../../../../node_modules/react';
import { AccordionTypes } from '../AccordionTypes';

declare const coustomizeAccordioStyle: (props?: ({
    variant?: AccordionTypes.Arrow | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type CoustomizeAccordioProps = ComponentProps<"div"> & VariantProps<typeof coustomizeAccordioStyle> & {
    variant?: AccordionTypes;
    children: string;
    content?: any;
    Icon: React.ReactNode;
    childClassName?: string;
};
export declare const CoustomizeAccordion: React.ForwardRefExoticComponent<Omit<CoustomizeAccordioProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default CoustomizeAccordion;
