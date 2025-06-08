import { Col, Layout, Row } from 'antd';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'usehooks-ts';

import { CTMenuList, CTSeoMeta } from '@/components';
import { menuOptions } from '@/constants/common';
import { leftColProps } from '@/pages/home/Home.constant';

import { CTLayoutDashboardProps } from './CTLayoutDashboard.type';
import {
  CTLayoutDashboardHeader,
  CTLayoutDashboardSidebar,
} from './subcomponent';

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
              {isDesktop && (
                <Row>
                  <Col {...leftColProps}>
                    <CTMenuList
                      listWrapperContainerProps={{ className: 'mb--3' }}
                      title="About"
                      list={menuOptions}
                      clickable
                    />
                  </Col>
                </Row>
              )}
              {children}
            </div>
          </Layout.Content>
        </Layout>
      </animated.div>
    </div>
  );
};

export default CTLayoutDashboardComponent;
