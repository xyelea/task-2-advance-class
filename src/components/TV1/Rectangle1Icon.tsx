import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 101 214' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.842285 10C0.842285 4.47715 5.31944 0 10.8423 0H90.8423C96.3651 0 100.842 4.47715 100.842 10V204C100.842 209.523 96.3651 214 90.8423 214H10.8423C5.31944 214 0.842285 209.523 0.842285 204V10Z'
      fill='#03989E'
    />
  </svg>
);
const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
