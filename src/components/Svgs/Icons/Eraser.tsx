import { CustomSvgProps } from '../shared';

function Eraser({ height }: CustomSvgProps) {
  const DEFAULT_HEIGHT = '512';

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="eraser"
      className="svg-inline--fa fa-eraser fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height={height ?? DEFAULT_HEIGHT}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"
      ></path>
    </svg>
  );
}

export default Eraser;
