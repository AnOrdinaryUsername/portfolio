export type Coordinates = {
  x: number;
  y: number;
};

export type StrokeSettings = {
  isSolidLine: boolean; // stoke-dasharray: 15, 15 for dotted lines
  color: string;
  strokeWidth: number;
};
