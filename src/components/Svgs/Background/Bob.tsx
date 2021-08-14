import type { CustomSvgProps } from 'components/Svgs/shared';

function Bob({ width }: CustomSvgProps) {
  const DEFAULT_WIDTH = '514';

  return (
    <svg
      width={width ?? DEFAULT_WIDTH}
      viewBox="0 0 514 445"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.3474 345.602C88.3474 345.602 88.3474 372.5 111.021 408C133.694 443.5 146.521 443.5 146.521 443.5C160.774 440.603 445.531 449.997 441.021 423.5C439.628 415.315 433.937 398.976 425.752 380C403.039 327.344 361.118 240.374 338.511 264.99C303.343 303.286 277.377 364.569 208.021 308.49C203.107 301.889 197.337 295.642 191.021 289.933C143.366 246.861 64.6481 248.458 88.3474 345.602Z"
        fill="#F5F7F9"
        stroke="#2E3440"
        strokeWidth="2"
      />
      <path
        d="M323.021 287C323.021 294.156 338.023 328.5 309.021 351.5C280.019 374.5 278.035 379 259.278 379C242.706 379 238.791 385 207.521 347C176.251 309 184.521 294.931 184.521 287C184.521 273.193 220.342 330 259.278 330C298.214 330 323.021 273.193 323.021 287Z"
        fill="#2E3440"
        stroke="#F5F7F9"
        strokeWidth="0.35"
      />
      <ellipse cx="123.021" cy="313.5" rx="11" ry="10.5" fill="#2E3440" />
      <path
        d="M513 120.5C513 136.816 505.614 152.496 492.213 166.879C478.807 181.265 459.423 194.305 435.558 205.298C387.83 227.283 322.353 241 251.5 241C180.647 241 117.929 227.283 72.9626 205.308C27.9321 183.302 1 153.183 1 120.5C1 87.8416 29.2709 57.9674 75.6981 36.199C122.046 14.468 186.144 1 257 1C327.856 1 391.954 14.468 438.302 36.199C484.729 57.9674 513 87.8416 513 120.5Z"
        fill="#F5F7F9"
        stroke="#2E3440"
        strokeWidth="2"
      />
      <g filter="url(#filter0_d)">
        <path d="M255 279L222.091 237H287.909L255 279Z" fill="#F5F7F9" />
      </g>
      <ellipse cx="256.5" cy="234" rx="32.5" ry="13" fill="#F5F7F9" />
      <defs>
        <filter
          id="filter0_d"
          x="222.091"
          y="237"
          width="65.8179"
          height="45"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Bob;
