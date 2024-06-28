import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { ButtonSize } from '../../Button/type';

declare const profileStyles: (props?: ({
    size?: ButtonSize | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProfileAvatarProps extends ComponentProps<"div">, VariantProps<typeof profileStyles> {
    src?: string;
    name: string;
    bgImgColor?: string;
    className?: string;
    textColor?: string;
}
declare const ProfileAvatar: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ProfileAvatarProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ProfileAvatar;
