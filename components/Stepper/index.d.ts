import { default as React } from '../../../node_modules/react';

type Step = {
    component: React.FC;
    title: string;
    completed: boolean;
};
type StepperProps = {
    steps: Step[];
};
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export default Stepper;
