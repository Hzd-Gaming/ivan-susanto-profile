import { Timeline, TimelineProps } from 'antd';
import cx from 'classnames';

import './style.scss';

const CTTimeline: React.FC<TimelineProps> = ({ className, ...antdProps }) => {
  return <Timeline className={cx('ct_timeline', className)} {...antdProps} />;
};

export default CTTimeline;
