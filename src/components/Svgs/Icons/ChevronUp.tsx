import type { CustomSvgProps } from '../shared';

function ChevronUp({ height }: CustomSvgProps) {
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
      className="feather feather-chevron-up"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
}

export default ChevronUp;
