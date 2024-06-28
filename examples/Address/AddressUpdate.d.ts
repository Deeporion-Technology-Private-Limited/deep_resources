import { IAddress } from '../../components/Data/Address';

type AddressProps = {
    userName: string;
    addressData: IAddress;
    onUpdateAddress: (address: IAddress) => void;
    addressType: string;
};
declare const AddressComponent: ({ userName, addressData, onUpdateAddress, addressType, }: AddressProps) => import("react/jsx-runtime").JSX.Element;
export default AddressComponent;
