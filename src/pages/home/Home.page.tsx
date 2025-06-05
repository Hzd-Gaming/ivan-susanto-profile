import { Col, Row, Space } from 'antd';

import { CTMenuList } from '@/components';
import { contactOptions, menuOptions } from '@/constants/common';
import { CTLayoutDashboard } from '@/layouts';

import { ProfileBackgroundVideo } from './components';
import {
  kHomePageMeta,
  profileStatDescCulinary,
  profileStatDescTickets,
} from './Home.constant';
import './Home.style.scss';

const HomePage: React.FC = () => {
  return (
    <CTLayoutDashboard
      className="home_page"
      meta={kHomePageMeta}
      backgroundVideo={<ProfileBackgroundVideo />}>
      <Row gutter={24}>
        <Col md={10}>
          <div className="pb--2">
            <div className="title_wrapper">
              <Row justify="center">
                <p className="title">Ivan Susanto</p>
              </Row>
            </div>
          </div>
          <div className="home_page__profile_bio">
            {`A highly motivated “Your Chef” with professional attitude of team work. Having young spirit to
              achieve any decided goals yet acknowledge in delivering risk- free solution of any problems through
              past working experience in the field.`}
          </div>
          <div className="mb--2">
            <CTMenuList title="About" list={menuOptions} clickable />
          </div>
          <CTMenuList title="Contact" list={contactOptions} />
        </Col>
        <Col md={3} lg={5} />
        <Col md={11} lg={9}>
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
                  <p className="mb--1">Tickets:</p>
                  <div className="home_page__profile_stat__desc__scrollable_value_container">
                    {profileStatDescTickets?.map(({ key, value }) => (
                      <div key={key}>{value}</div>
                    ))}
                  </div>
                </Col>
                <Col span={12}>
                  <p className="mb--1">Culinary:</p>
                  <div className="home_page__profile_stat__desc__scrollable_value_container">
                    {profileStatDescCulinary?.map(({ key, value }) => (
                      <div key={key}>{value}</div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </CTLayoutDashboard>
  );
};

export default HomePage;
