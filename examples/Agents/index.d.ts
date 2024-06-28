import { Box } from '../../components';
import { ComponentProps } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

type AgentsProps = ComponentProps<"div"> & VariantProps<typeof Box> & {
    data: [] | any;
};
export declare const Profile: ({ data }: any) => import("react/jsx-runtime").JSX.Element;
export declare const Address: ({ address }: any) => import("react/jsx-runtime").JSX.Element;
declare const Agents: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<AgentsProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLAllCollection>>;
export default Agents;
