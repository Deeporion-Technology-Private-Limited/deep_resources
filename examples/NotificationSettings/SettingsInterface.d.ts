import { Dispatch, SetStateAction } from '../../../node_modules/react';

export interface initialProp {
    PauseNotification: boolean;
    innApp: boolean;
    Email: boolean;
    SMS: boolean;
    WhatsApp: boolean;
}
export interface settingsProps {
    setInitialState: Dispatch<SetStateAction<initialProp>>;
}
