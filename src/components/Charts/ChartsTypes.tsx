export enum ChartsType {
    doubleSplineAreaChart = "Double Spline Area Chart"
}

 export enum ChartValueType {
    Valuex = "ValueX",
    Valuey = "ValueY",
    Days = "Days",
    yAxisLabel = "yAxisLabel"
  }
  
  export const chartData = {
    [ChartValueType.Valuex]: [600, 800, 1100, 500, 1000, 700, 800],
    [ChartValueType.Valuey]: [500, 700, 1000, 400, 900, 600, 700],
    [ChartValueType.Days]: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    [ChartValueType.yAxisLabel]:["1120", "850", "550", "250", "0"],
  };

