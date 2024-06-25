// Define the interface for the address
export interface IAddress {
  country: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  postalCode: number;
}

export interface IIndialStates {
  code: string;
  label: string;
}

export const Address: IAddress = {
  phone: "+1 415 123 4567",
  city: "San Francisco",
  address: "1234 Market Street, Apt 5B",
  state: "Karnataka",
  country: "IN",
  postalCode: 94103,
};

export const indianStates: IIndialStates[] = [
  { label: "Andhra Pradesh", code: "AP" },
  { label: "Arunachal Pradesh", code: "AR" },
  { label: "Assam", code: "AS" },
  { label: "Bihar", code: "BR" },
  { label: "Chhattisgarh", code: "CT" },
  { label: "Goa", code: "GA" },
  { label: "Gujarat", code: "GJ" },
  { label: "Haryana", code: "HR" },
  { label: "Himachal Pradesh", code: "HP" },
  { label: "Jammu and Kashmir", code: "JK" },
  { label: "Jharkhand", code: "JH" },
  { label: "Karnataka", code: "KA" },
  { label: "Kerala", code: "KL" },
  { label: "Madhya Pradesh", code: "MP" },
  { label: "Maharashtra", code: "MH" },
  { label: "Manipur", code: "MN" },
  { label: "Meghalaya", code: "ML" },
  { label: "Mizoram", code: "MZ" },
  { label: "Nagaland", code: "NL" },
  { label: "Odisha", code: "OR" },
  { label: "Punjab", code: "PB" },
  { label: "Rajasthan", code: "RJ" },
  { label: "Sikkim", code: "SK" },
  { label: "Tamil Nadu", code: "TN" },
  { label: "Telangana", code: "TG" },
  { label: "Tripura", code: "TR" },
  { label: "Uttar Pradesh", code: "UP" },
  { label: "Uttarakhand", code: "UK" },
  { label: "West Bengal", code: "WB" },
  { label: "Andaman and Nicobar Islands", code: "AN" },
  { label: "Chandigarh", code: "CH" },
  { label: "Dadra and Nagar Haveli and Daman and Diu", code: "DD" },
  { label: "Delhi", code: "DL" },
  { label: "Lakshadweep", code: "LD" },
  { label: "Puducherry", code: "PY" },
];
