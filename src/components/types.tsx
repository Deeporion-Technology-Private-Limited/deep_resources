import { ReviewDataType } from "./CarouselSlider";
import { Dispatch, SetStateAction } from "react"

// Accordion
export enum AccordionTypes {
  Cursor = "Cursor",
  Arrow = "Arrow",
  Plus = "Plus",
}

export enum contentName {
  Accordion1 = "Accordion 1",
  Accordion2 = "Accordion 2",
  Accordion3 = "Accordion 3",
}

export enum contentData {
  content = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
}

export const contentSize = ["small", "medium", "large"];

// Alert
export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum AlertVariant {
  Filled = "filled",
  Outlined = "outlined",
}

// BarChart
export interface valueType {
  a1: number;
  color: string;
}

export interface Bartype {
  day: string;
  value: valueType[];
}

// Button
export enum ButtonVariant {
  DefaultPrimary = "defaultPrimary",
  DefaultSeconday = "defaultSecondary",
  DefaultDarkBackground = "defaultDarkBackground",
}

export enum ButtonDirection {
  Row = "row",
  Column = "column",
}

export enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export enum ButtonIconPosition {
  Left = "left",
  Right = "right",
}

export enum SkeletonVariant {
  Circle = "circle",
  Text = "text",
  Card = "card",
}

export enum ArrowPosition {
  Inside = "inside",
  Outside = "outside",
}

export enum IndicatorType {
  Dots = "dots",
  Bars = "bars",
}

export enum SlideVariant {
  Default = "default",
}

// Calendar
export enum MonthsOfYear {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export interface CalendarProps {
  year: number;
  month: MonthsOfYear;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  onDateRangeSelect?: (startDate: Date, endDate: Date) => void;
}

// Carousel
export interface SlideItem {
  image: string;
  heading?: string;
  headingClassName?: string;
  text?: string;
  textClassName?: string;
  button?: {
    label: string;
    onClick: () => void;
    buttonClassName?: string;
  };
  reviewData?: ReviewDataType;
}

// Cateloge
export interface subcomponent {
  id?: number;
  type?: string;
}
export interface category {
  id?: number;
  type?: string;
  subcomponent?: subcomponent[];
}
export interface user {
  id?: number;
  type?: string;
  category?: category[];
}
export interface Items {
  data: user[] | undefined | any;
  handleClick?: (user: Object) => void;
  userType?: string;
}

// Charts
export enum ChartsType {
  doubleSplineAreaChart = "Double Spline Area Chart",
}

export enum ChartValueType {
  xAxisValues = "xAxisValues",
  yAxisValues = "yAxisValues",
  xAxisLabels = "xAxisLabels",
  yAxisLabel = "yAxisLabel",
}

// Checkbox
export enum CheckboxType {
  Checkbox = "checkbox",
  Radio = "radio",
}

// Chips
export enum ChipsTypes {
  default = "default",
  not_active = "Not_Active",
  active = "Active",
}
export enum ChipsSize {
  small = "px-1 py-0 text-sm",
  medium = "px-0 py-0 text-base",
  large = "px-3 py-2 text-lg",
}

export enum chipsChildren {
  chipsChildren = "#1 day",
}

export enum chipscolour {
  Primary = "text-white",
}

// Elevation
export enum ElevationShadow {
  None = "none",
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

// Footer
export interface serviceItem {
  name?: string;
  value?: string;
}
export interface socialLinks {
  iconUrl?: string;
  onClick?: () => void;
}

export interface titleFooter {
  title?: string;
  titleColor?: string;
  titleStyle?: string;
}

export interface listItem {
  name?: string;
  href?: string;
}

export interface CoreCustomerProps {
  children?: React.ReactNode;
  className?: string;
  heading?: titleFooter;
  description?: string;
  services?: serviceItem[];
  links?: socialLinks[];
  list?: listItem[];
  newsLetter?: boolean;
  footerTextColor?: string;
  customInnerBoxClass?: string;
  innerClass?: string;
  innerUlClass?: string;
  innerLiClass?: string;
  descriptionClass?: string;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  handleSubscribe?: () => void;
}

// Header
export enum NavbarDirection {
  Row = "row",
  Column = "column",
}

// Input
export enum InputType {
  Text = "text",
  Password = "password",
  Email = "email",
  Phone = "phone",
  Phones = "Phone",
  Numbers = "numbers",
  SearchIcon = "search icon",
  Date = "date",
  Search = "search",
  Number = "number",
  Input = "input",
  Prefix = "prefix",
  Checkbox = "checkbox",
  Otp = "otp",
  TextInputLabel = "User Name",
  PasswordInputLabel = "Password",
  TextInputIntialValue = "Sumit",
  ClassName = "FormInput-class",
  UserName = "User Name",
  Name = "userName",
  
}


export enum Placeholder {
  Text = "Insert text here",
  Password = "Password",
  Number = "Number",
  Date = "Date",
  Phone = "Phone",
  PhoneNumber = "Phone Number",
  Search = "Search",
  SearchIcon = "Search here ...",
  Email = "Enter your email",
  Input = "Enter Something",
  Prefix = "Enter Your Values",
  UserName = "Username",
  Name = "Name",
  YourName = "Your name",
  YourEmail = "Your email",
  YourPassword = "Your password",
  YourNewPassword = "Your new password",
  ConfirmNew = "Confirm your new password",
  Subject = "subject",
  Details = "details",
  FormInput = "Enter Something",
  
}

export enum InputVariant {
  Standard = "standard",
  Outlined = "outlined",
  Filled = "filled",
}

// Menu Item
export enum MenuItemVariant {
  Default = "default",
  LeftIcon = "leftIcon",
  RightIcon = "rightIcon",
  LeftSpacer = "leftSpacer",
  Border = "border",
}

export enum MenuItemSize {
  Small = "sm",
  Medium = "md",
}

export enum PrimaryType {
  Primary = "primary",
}

// Pagination
export enum Shape {
  Rounded = "rounded",
  Square = "square",
}
export enum Variants {
  Contained = "contained",
  Outlined = "outlined",
  Text = "text",
}
export enum PaginationTypes {
  Number = "number",
  String = "string",
}

export enum PaginationColor {
  Danger = "red",
  Primary = "blue",
  Success = "green",
  Secondary = "gray",
  Brown = "brown",
}

// Product Detail Card
export interface IProductDetails {
  productDetail?: string;
  sizeAndFit?: string;
  materialAndCare?: string;
}

export interface IProductSpecifications {
  fabric?: string;
  hemline?: string;
  length?: string;
  neck?: string;
  fabricType?: string;
  knitOrWoven?: string;
  mainTrend?: string;
  occasion?: string;
  color?: string;
  style?: string;
}

// Progress bar
export interface IProduct {
  productCode?: string;
  productDetails?: IProductDetails;
  productSpecifications?: IProductSpecifications;
}

export enum variants {
  circular = "circular",
  linear = "linear",
}

export interface IProgressBar {
  progress: number;
  variant?: string;
  size?: number;
  strokeWidth?: number;
  bgColor: string;
  textFont?: string;
  textColor?: string;
  rotate?: string;
  middleText?: boolean;
}

// Rounded corner
export enum BorderRadius {
  None = "rounded-none",
  Small = "rounded-sm",
  Medium = "rounded",
  MediumMD = "rounded-md",
  Large = "rounded-lg",
  XL = "rounded-xl",
  DoubleXL = "rounded-2xl",
  TripleXL = "rounded-3xl",
  QuadrupleXL = "rounded-4xl",
  Full = "rounded-full",
}

// System Message
export enum systemMessageTypes {
  error = "error",
  warning = "warning",
  information = "information",
}

export enum systemMessageSize {
  small = "px-4 py-2 text-sm",
  medium = "px-4 py-2 text-base",
  large = "px-6 py-3 text-lg",
}

export enum messageText {
  children = "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
}

export enum messageColor {
  Primary = "text-white",
}

// Tooltip
export enum PositionType {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left",
}

// Single Splice Chart
export enum singleSpliceType {
  SingleLineChart = "Singe Line Chart",
}


// Add Gift Card
export interface IRateData {
  value: number;
}

//Adress Chart

export interface IAddress {
  country: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  postalCode: number;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface IIndialStates {
  code: string;
  label: string;
}

// Follow us 

export interface IFollowUsData {
    
  heading:string;
  contents: string;
  imagedetails:Array<{ name: string; img: string }>;
}

// Gift Cards

export interface ICards {
  img: string;
  id: number;
  category: string;
}

export interface ILabels {
  value: string;
  id: number;
}


//Personal Details
export interface StateProp {
  first_name: string;
  Last_name: string;
  phone_Number: string;
  email: string;
  pincode: string;
  Area: string;
  Country: string;
  city: string;
  State: string;
  Address: string;
  addressType: string;
  Checked?: boolean;
}

//Product review

export interface IProductReviewDescription {
  rating: number;
  heading: string;
  contents: string;
  helpFull: number;
  notHelpfull: number;
  days: number;
}

export interface IDescriptionReviewSingleCard {
  objectData: any;
}

// Define an interface for the sizes object
export interface ISizes {
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL: string;
}

// Define the interface for the Shipment dates
export interface IShipmentDates {
  shippedDate: string;
  dispatchedDate: string;
  returnAvailable: string;
  location: string;
}

// Define the interface for the delivery address
export interface IDeliveryAddress {
  customerName: string;
  phone: string;
  address: string;
  pincode: number;
}


// Define the union type for the shipment status
export type ShipmentStatus =
  | "Pending"
  | "Processing"
  | "Confirmed"
  | "OutOfDelivery"
  | "Shipped"
  | "Cancelled"
  | "Returned"
  | "Failed";

// Define the interface for the shipment status colors
export interface IshipmentStatusColors {
  Pending: string;
  Processing: string;
  Confirmed: string;
  OutOfDelivery: string;
  Shipped: string;
  Cancelled: string;
  Returned: string;
  Failed: string;
}

// Define the interface for the shipment information
export interface IShipmentOrderInfo {
  imageURL: string;
  logisticsCompany?: string;
  productName?: string;
  productDescription?: string;
  price?: number;
  quantity?: number;
  takingId?: string;
  orderId: string;
  currentShipmentStatus: ShipmentStatus;
  shipmentCountry?: string;
  shipmentFrom?: string;
  shipmentTo?: string;
  currentLocation?: string;
  distanceLeft?: number;
  lastStop?: number;
  timeDuration?: string;
  estimatedDeliveryDate?: string;
}

// Define the interface for the time duration
export interface ITimeDuration {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  justNow: string;
}

//Size Data For Women
export interface ISizeDataForWomen {
  size: string;
  hipCm: number;
  waistCm: number;
  lengthCm: number;
}

// Subscriptions
export interface ISubscription {
  planType: string;
  price: number;
  transactionPercent: number;
  planFor: string;
  status: string;
}

export interface IPaymentHistory {
  amount: string;
  typeOfPlan: string;
  paymentDate: string;
  cardUsed: string;
  details: string;
}

// Table Data

export interface ItableData {
  ID: string | number,
  Order: string,
  Date: string | number,
  Amount: string | number,
  "Time created": string | number,
  Status: string,
  Name: string,
  Role: string,
}

// Whishlist
export interface ICardDetails {
  id: number,
  brand: string;
  description: string;
  imageSrc: string;
  iconUrl?: string;
  price: number;
  rating: number;
  reviews: number;
}
//Stepper Data
export interface StepperData {
  personalInfo: string;
  name: string;
  email: string;
  addressInfo: string;
  address: string;
  city: string;
  payMode: string;
}

// Offer Data
export interface NewOfferData {
  codeName: string;
  promoCode: string;
  startDate: string;
  endDate: string;
  client: string;
  promo: string;
  promoType: string;
  amountOff: string;
}

export interface Category {
  name: string;
  items: { name: string; checked: boolean }[];
  checked: boolean;
  count: number;
}

export interface initialProp {
    PauseNotification : boolean ,
        innApp : boolean ,
        Email:boolean ,
        SMS:boolean ,
        WhatsApp:boolean
}

export interface settingsProps {
    setInitialState:Dispatch<SetStateAction<initialProp>>
}


// Single notification 

export interface singleNotification {
  profile?: string;
  title?: string;
  message?: string;
  arrivedtime?: string; 
  onclick?:() => void;
  isRead: boolean;
}

export interface NotificationProp {
  value?: singleNotification[]
}


// MyCart

export interface CardObj {
  id?: number;
  imageSrc?: string;
  price?: number;
  brand?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  checked?: boolean;
}
export interface CardItem {
  item: CardObj[];
  handleCart:() =>void;
}

// Model 

export enum Product {
  AddToCart = "Add to Cart",
  Wishlist = "Wishlist",
  SizeChart = "Size Chart",
  HowToMeasure = "How To Measure",
  Inches = "in",
  Centimeters = "cm",
  ModelDescription = "Women Navvy Blue Empire Dress",
  ModelTitle = "Mango",
  MeasureDescription = "Find the size to fit your body measurements in the size chart below."
}


// Information 
export interface PersonalInfoLabel {
  personalInfo: string;
    fullname: string;
    address: string;
    bio: string;
    email: string;
    socialLink: string;
    facebook: string;
    linkedin: string;
    twitter: string;
}




