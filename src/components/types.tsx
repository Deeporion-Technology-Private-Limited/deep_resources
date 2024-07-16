import { ReviewDataType } from "./CarouselSlider";

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
