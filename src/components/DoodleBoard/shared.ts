export type Coordinates = {
  x: number;
  y: number;
};

export type Paths = {
  strokeSettings: StrokeSettings;
  points: Coordinates[];
};

export type DrawEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>;

export type DrawEventHandler = React.TouchEventHandler<HTMLDivElement> &
  React.MouseEventHandler<HTMLDivElement>;

export type StrokeSettings = {
  isSolidLine: boolean; // stoke-dasharray: 15, 15 for dotted lines
  color: string;
  strokeWidth: number;
  opacity: number;
  blendMode: string;
};
