import { memo, SVGProps } from 'react';

const Frame2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 166 220' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={83} cy={50.9332} rx={78} ry={50} stroke='#66E2E7' strokeWidth={5} />
    <path d='M165.498 167.932L42.0491 212.084L41.4529 125.484L165.498 167.932Z' fill='#FFBD59' />
  </svg>
);
const Memo = memo(Frame2Icon);
export { Memo as Frame2Icon };
