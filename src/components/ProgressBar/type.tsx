export enum variants {
    circular = "circular",
    linear="linear",
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
  