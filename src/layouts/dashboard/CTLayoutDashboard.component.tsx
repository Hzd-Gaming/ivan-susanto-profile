import { Layout } from 'antd';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'usehooks-ts';

import { CTSeoMeta } from '@/components';

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
  backgroundVideo,
  meta,
  titlePage,
  ...rest
}) => {
  // handle animation onMount
  const animationOnMountWholeLayout = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  // end of region

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className={cx('ct_layout_dashboard', className)} {...rest}>
      <CTSeoMeta meta={meta} />
      <animated.div style={animationOnMountWholeLayout}>
        <Layout className={cx('ct_layout_dashboard__inner')}>
          {Boolean(backgroundVideo) && (
            <div className="ct_layout_dashboard__inner__background_video">
              {backgroundVideo}
            </div>
          )}
          <Layout.Content
            className="ct_layout_dashboard__content"
            {...contentProps}>
            {!isDesktop && <CTLayoutDashboardSidebar />}
            <CTLayoutDashboardHeader titlePage={titlePage} />
            <div className="ct_layout_dashboard__content__children_container">
              {children}
            </div>
          </Layout.Content>
        </Layout>
      </animated.div>
    </div>
  );
};

export default CTLayoutDashboardComponent;
