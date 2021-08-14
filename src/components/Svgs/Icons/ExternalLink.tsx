import type { CustomSvgProps } from '../shared';

function ExternalLink({ height }: CustomSvgProps) {
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
      className="feather feather-external-link"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

export default ExternalLink;
