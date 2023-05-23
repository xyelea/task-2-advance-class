import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Frame2Icon } from './Frame2Icon';
import { Rectangle1Icon } from './Rectangle1Icon';
import { Rectangle4Icon } from './Rectangle4Icon';
import classes from './TV1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const TV1: FC<Props> = memo(function TV1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame4}>
        <div className={classes.frame1}>
          <div className={classes.frame3}>
            <div className={classes.rectangle2}></div>
            <div className={classes.rectangle3}></div>
          </div>
          <div className={classes.frame2}>
            <Frame2Icon className={classes.icon} />
          </div>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon2} />
          </div>
        </div>
        <div className={classes.rectangle4}>
          <Rectangle4Icon className={classes.icon3} />
        </div>
      </div>
    </div>
  );
});
