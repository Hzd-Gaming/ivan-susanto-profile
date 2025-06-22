import { Carousel, Col, Row } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import { CTMenuList, CTTitle } from '@/components';
import { contactOptions } from '@/constants/common';
import { CTLayoutDashboard } from '@/layouts';

import {
  ProfileBackgroundVideo,
  ProfileBioDesc,
  ProfileStatus,
} from './components';
import {
  kHomePageMeta,
  leftColProps,
  middleColProps,
  rightColProps,
  rowProps,
} from './Home.constant';
import './Home.style.scss';

const HomePage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isXsMobile = useMediaQuery('(max-width: 575px)');

  return (
    <CTLayoutDashboard
      className="home_page"
      meta={kHomePageMeta}
      backgroundVideo={<ProfileBackgroundVideo />}
      {...(!isDesktop ? { titlePage: 'PROFILE' } : {})}>
      <Row className="mb--4" {...rowProps}>
        <Col {...leftColProps}>
          {isXsMobile ? (
            <>
              <CTTitle title="Ivan Susanto" />
              <Carousel infinite={false} arrows draggable>
                <ProfileBioDesc />
                <ProfileStatus />
              </Carousel>
            </>
          ) : (
            <div>
              <CTTitle title="Ivan Susanto" />
              <ProfileBioDesc />
            </div>
          )}
        </Col>
        <Col {...middleColProps} />
        <Col {...rightColProps} />
      </Row>

      {!isXsMobile && (
        <Row {...rowProps}>
          <Col {...leftColProps}>
            {isDesktop && (
              <CTMenuList
                listWrapperContainerProps={{
                  className: 'mb--2',
                }}
                title="Contact"
                list={contactOptions}
              />
            )}
          </Col>
          <Col {...middleColProps} />
          <Col {...rightColProps}>
            <ProfileStatus />
          </Col>
        </Row>
      )}
    </CTLayoutDashboard>
  );
};

export default HomePage;
