import { Layout } from 'antd';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';

import { CTSeoMeta } from '@/components';
import { useComponentStore } from '@/stores/common';

import { CTLayoutDashboardProps } from './CTLayoutDashboard.type';
import {
  CTLayoutDashboardHeader,
  CTLayoutDashboardSidebar,
} from './subcomponent';

import '@/styles/scss/utils/_margin.scss';
import './CTLayoutDashboard.style.scss';

const CTLayoutDashboardComponent: React.FC<CTLayoutDashboardProps> = ({
  children,
  className,
  contentProps,
  meta,
  ...rest
}) => {
  const { isBackgroundMusicMuted } = useComponentStore((state) => state);

  // handle animation onMount
  const animationOnMountWholeLayout = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  // end of region

  return (
    <div className={cx('ct_layout_dashboard', className)} {...rest}>
      <CTSeoMeta meta={meta} />
      <animated.div style={animationOnMountWholeLayout}>
        <Layout className={cx('ct_layout_dashboard__inner')}>
          <Layout.Content
            className={cx(
              'ct_layout_dashboard__content',
              isBackgroundMusicMuted && 'ct_layout_dashboard__content--dark',
              contentProps?.className
            )}
            {...contentProps}>
            <CTLayoutDashboardHeader />
            <CTLayoutDashboardSidebar />
            <div className="p--3">{children}</div>
          </Layout.Content>
        </Layout>
      </animated.div>
    </div>
  );
};

export default CTLayoutDashboardComponent;
