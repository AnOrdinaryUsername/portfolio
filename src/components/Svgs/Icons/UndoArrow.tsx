import { CustomSvgProps } from '../shared';

function UndoArrow({ height }: CustomSvgProps) {
  const DEFAULT_HEIGHT = '24';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ?? DEFAULT_HEIGHT}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-corner-up-left"
    >
      <polyline points="9 14 4 9 9 4"></polyline>
      <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
    </svg>
  );
}

export default UndoArrow;
