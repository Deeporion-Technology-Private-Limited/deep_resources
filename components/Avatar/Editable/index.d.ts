import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { Box } from '../..';
import { ButtonSize } from '../../Button/type';

declare const profileStyles: (props?: ({
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProfileAvatarProps extends ComponentProps<typeof Box>, VariantProps<typeof profileStyles> {
    src?: string;
    size?: ButtonSize;
    className?: string;
    textColor?: string;
    iconStyle?: string;
    textStyle?: string;
}
declare const Profile: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ProfileAvatarProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Profile;
