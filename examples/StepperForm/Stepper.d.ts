import { default as React, ReactElement } from '../../../node_modules/react';

export type Step = {
    component: ReactElement;
    title: string;
    data?: any;
};
interface StepperProps {
    steps: Step[];
}
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export default Stepper;
