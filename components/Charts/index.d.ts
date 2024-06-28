import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { ChartsType } from './ChartsTypes';

declare const chartStyle: (props?: ({
    variant?: ChartsType.doubleSplineAreaChart | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ChartProps = ComponentProps<"div"> & VariantProps<typeof chartStyle> & {
    xAxisValues: number[];
    yAxisValues: number[];
    xAxisLabels?: string[];
    yAxisLabels?: string[];
    region?: string[];
    lineColor1?: string;
    lineColor2?: string;
    gradientColor1Start?: string;
    gradientColor1End?: string;
    gradientColor2Start?: string;
    gradientColor2End?: string;
};
export declare const Chart: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<ChartProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Chart;
