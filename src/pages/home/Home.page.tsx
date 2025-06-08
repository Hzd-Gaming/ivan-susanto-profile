import { Carousel, Col, Row, Space } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import { CTMenuList } from '@/components';
import { contactOptions, menuOptions } from '@/constants/common';
import { CTLayoutDashboard } from '@/layouts';

import { ProfileBackgroundVideo } from './components';
import {
  kHomePageMeta,
  leftColProps,
  middleColProps,
  profileStatDescLang,
  profileStatDescTickets,
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
              <div className="title_wrapper__container">
                <div className="title_wrapper">
                  <Row justify="center">
                    <p className="title">Ivan Susanto</p>
                  </Row>
                </div>
              </div>
              <Carousel infinite={false} arrows draggable>
                <div className="home_page__profile_bio">
                  {`Dynamic Chef eager to bring a youthful zeal and a collaborative mindset to the team, 
                coupled with a proven track record of providing safe, 
                innovative solutions to culinary challenges based on extensive industry experience.`}
                </div>

                <div className="home_page__profile_stat">
                  <div className="home_page__profile_stat__title">Status</div>
                  <div className="home_page__profile_stat__title__border_bottom" />
                  <div className="mt--2 home_page__profile_stat__desc">
                    <Space className="mb--1" size={24}>
                      <p>Job:</p>
                      <Row justify="center" style={{ width: '100%' }}>
                        <p className="home_page__profile_stat__desc__job_value">
                          CHEF DE PARTIE
                        </p>
                      </Row>
                    </Space>
                    <Row gutter={24}>
                      <Col
                        className="home_page__profile_stat__desc__col_left_container"
                        span={12}>
                        <p className="mb--1">Skills:</p>
                        <div className="home_page__profile_stat__desc__scrollable_value_container">
                          {profileStatDescTickets?.map(({ key, value }) => (
                            <div key={key}>{value}</div>
                          ))}
                        </div>
                      </Col>
                      <Col span={12}>
                        <p className="mb--1">Language:</p>
                        <div className="home_page__profile_stat__desc__scrollable_value_container">
                          {profileStatDescLang?.map(({ key, value }) => (
                            <div className="mb--2" key={key}>
                              {value}
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Carousel>
            </>
          ) : (
            <div>
              <div className="title_wrapper__container">
                <div className="title_wrapper">
                  <Row justify="center">
                    <p className="title">Ivan Susanto</p>
                  </Row>
                </div>
              </div>
              <div className="home_page__profile_bio">
                {`Dynamic Chef eager to bring a youthful zeal and a collaborative mindset to the team, 
                coupled with a proven track record of providing safe, 
                innovative solutions to culinary challenges based on extensive industry experience.`}
              </div>
            </div>
          )}
          {isDesktop && (
            <div>
              <CTMenuList title="About" list={menuOptions} clickable />
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
            <div className="home_page__profile_stat">
              <div className="home_page__profile_stat__title">Status</div>
              <div className="home_page__profile_stat__title__border_bottom" />
              <div className="mt--2 home_page__profile_stat__desc">
                <Space className="mb--1" size={24}>
                  <p>Job:</p>
                  <Row justify="center" style={{ width: '100%' }}>
                    <p className="home_page__profile_stat__desc__job_value">
                      CHEF DE PARTIE
                    </p>
                  </Row>
                </Space>
                <Row gutter={24}>
                  <Col
                    className="home_page__profile_stat__desc__col_left_container"
                    span={12}>
                    <p className="mb--1">Skills:</p>
                    <div className="home_page__profile_stat__desc__scrollable_value_container">
                      {profileStatDescTickets?.map(({ key, value }) => (
                        <div key={key}>{value}</div>
                      ))}
                    </div>
                  </Col>
                  <Col span={12}>
                    <p className="mb--1">Language:</p>
                    <div className="home_page__profile_stat__desc__scrollable_value_container">
                      {profileStatDescLang?.map(({ key, value }) => (
                        <div className="mb--2" key={key}>
                          {value}
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </CTLayoutDashboard>
  );
};

export default HomePage;
