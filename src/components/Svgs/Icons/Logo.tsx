interface LogoProps {
  height?: string;
}

function Logo({ height }: LogoProps) {
  const DEFAULT_HEIGHT = '96';

  return (
    <svg
      height={height ?? DEFAULT_HEIGHT}
      viewBox="0 0 205 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i)">
        <rect
          width="15.4446"
          height="82.5759"
          transform="matrix(-0.00330727 -0.999995 -0.999996 0.00289237 94.7378 15.4681)"
          fill="var(--fg-primary)"
        />
        <rect
          width="15.4446"
          height="82.5759"
          transform="matrix(-0.00330727 -0.999995 -0.999996 0.00289237 95 94.7496)"
          fill="var(--fg-primary)"
        />
        <rect
          width="16.0728"
          height="57.1185"
          transform="matrix(-0.783684 -0.621485 -0.6716 0.740635 94.7368 15.197)"
          fill="var(--fg-primary)"
        />
        <path
          d="M43.7793 47.2634L56.309 37.2018L94.9489 79.283L82.4192 89.3447L43.7793 47.2634Z"
          fill="var(--fg-primary)"
        />
        <rect
          width="16.5152"
          height="94.7266"
          transform="matrix(0.999996 -0.00289237 -0.00330727 -0.999995 0.313232 95.0235)"
          fill="var(--fg-primary)"
        />
        <rect
          width="17.9035"
          height="62.9815"
          transform="matrix(0.596134 -0.802637 -0.718668 -0.695652 47.9463 94.8857)"
          fill="var(--fg-primary)"
        />
        <rect
          width="17.9035"
          height="62.9815"
          transform="matrix(0.601432 0.799173 -0.714053 0.699796 47.6331 0.159607)"
          fill="var(--fg-primary)"
        />
        <rect
          width="15.4406"
          height="82.5759"
          transform="matrix(-0.999995 0.00330811 0.00289163 0.999996 125.465 0.262207)"
          fill="var(--fg-primary)"
        />
        <rect
          width="15.4406"
          height="82.5759"
          transform="matrix(-0.999996 0.00300461 0.00318372 0.999995 204.726 0)"
          fill="var(--fg-primary)"
        />
        <rect
          width="16.0758"
          height="57.0937"
          transform="matrix(-0.621208 0.783534 0.740769 0.671893 125.194 0.263184)"
          fill="var(--fg-primary)"
        />
        <path
          d="M157.252 51.2207L147.193 38.691L189.264 0.0511364L199.323 12.5808L157.252 51.2207Z"
          fill="var(--fg-primary)"
        />
        <rect
          width="16.5152"
          height="94.7025"
          transform="matrix(-0.00289163 -0.999996 -0.999995 0.00330811 205 94.6868)"
          fill="var(--fg-primary)"
        />
        <rect
          width="17.9006"
          height="62.9737"
          transform="matrix(-0.802564 -0.596232 -0.695561 0.718757 204.862 47.0537)"
          fill="var(--fg-primary)"
        />
        <rect
          width="17.9006"
          height="62.9737"
          transform="matrix(0.7991 -0.60153 0.699704 0.714142 110.16 47.3669)"
          fill="var(--fg-primary)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i"
          x="-6.10352e-05"
          y="0"
          width="205"
          height="99.0235"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
