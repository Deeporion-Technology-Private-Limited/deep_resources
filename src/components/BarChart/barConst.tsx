export interface valueType {
  a1: number;
  color: string;
}

export interface Bartype {
  day: string;
  value: valueType[]
} 
export const graphdata:Bartype[] = [
    {
      day:"Mon",
      value:[
        { a1: 42, color: "#5E463B" },
        { a1: 32, color: "#34D399" },
      ],
    },
    {
      day:"Tue",
      value:[
        { a1: 22, color: "#5E463B" },
        { a1: 52, color: "#34D399" },
      ],
    },
    {
      day:"Wed",
      value:[
        { a1: 12, color: "#5E463B" },
        { a1: 37, color: "#34D399" },
      ],
    },
    {
      day:"Thu",
      value:[
        { a1:22, color: "#5E463B" },
        { a1: 44, color: "#34D399" },
      ],
    },
    {
      day:"Fri",
      value:[
        { a1: 15, color: "#5E463B" },
        { a1: 70, color: "#34D399" },
      ],
    },
    {
      day:"Sat",
      value:[
        { a1: 29, color: "#5E463B" },
        { a1: 66, color: "#34D399" },
      ],
    },
    {
      day:"Sun",
      value:[
        { a1: 32, color: "#5E463B" },
        { a1: 8, color: "#34D399" },
      ],
    },
  ];
