import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 524 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H524V39H0V0Z' fill='#7ED957' />
  </svg>
);
const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
