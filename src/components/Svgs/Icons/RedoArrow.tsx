import { CustomSvgProps } from '../shared';

function RedoArrow({ height }: CustomSvgProps) {
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
      className="feather feather-corner-up-right"
    >
      <polyline points="15 14 20 9 15 4"></polyline>
      <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
    </svg>
  );
}

export default RedoArrow;
