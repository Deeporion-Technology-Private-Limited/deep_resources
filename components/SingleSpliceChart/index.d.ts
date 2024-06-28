import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { singleSpliceType } from './singleSpliceType';

declare const singleSplineStyle: (props?: ({
    variant?: singleSpliceType.SingleLineChart | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SingleLineChartProps = ComponentProps<"div"> & VariantProps<typeof singleSplineStyle> & {
    xAxisValues?: number[];
    xAxisLabels?: string[];
    yAxisLabels?: string[];
    region?: string;
    curveLineColor?: string;
    gradientStartColor?: string;
    gradientEndColor?: string;
};
export declare const SingleLineChart: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<SingleLineChartProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default SingleLineChart;
