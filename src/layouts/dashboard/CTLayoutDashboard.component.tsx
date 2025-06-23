import { useMemo } from 'react';

import { Col, Layout, Row } from 'antd';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const filteredMenuOpt = useMemo(
    () =>
      menuOptions?.filter((el) => {
        const splittedPathname = location?.pathname?.split('/');
        if (splittedPathname?.[splittedPathname.length - 1] === '') {
          splittedPathname.pop();
        }
        const trimmedPathname = splittedPathname?.join('/');
        return el?.key !== trimmedPathname;
      }),
    [location]
  );

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
            <header>
              {!isDesktop && <CTLayoutDashboardSidebar />}
              <CTLayoutDashboardHeader titlePage={titlePage} />
            </header>
            <main className="ct_layout_dashboard__content__children_container">
              {isDesktop && (
                <Row>
                  <Col {...leftColProps}>
                    <section>
                      <CTMenuList
                        listWrapperContainerProps={{ className: 'mb--3' }}
                        title="About"
                        list={filteredMenuOpt}
                        clickable
                      />
                    </section>
                  </Col>
                </Row>
              )}
              {children}
            </main>
          </Layout.Content>
        </Layout>
      </animated.div>
    </div>
  );
};

export default CTLayoutDashboardComponent;
