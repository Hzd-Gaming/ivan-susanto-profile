import { Col, Row, Space } from 'antd';

import { CTContainer } from '@/components';

import {
  profileStatDescLang,
  profileStatDescTickets,
} from '../../Home.constant';

import './ProfileStatus.style.scss';

const ProfileStatus: React.FC = () => {
  return (
    <CTContainer theme="blue" title="Status">
      <div className="profile_stat__desc mt--2 ">
        <Space className="mb--1" size={24}>
          <p>Job:</p>
          <Row justify="center" style={{ width: '100%' }}>
            <p className="profile_stat__desc__job_value">CHEF DE PARTIE</p>
          </Row>
        </Space>
        <Row gutter={24}>
          <Col className="profile_stat__desc__col_left_container" span={12}>
            <p className="mb--1">Skills:</p>
            <div className="profile_stat__desc__scrollable_value_container">
              {profileStatDescTickets?.map(({ key, value }) => (
                <div key={key}>{value}</div>
              ))}
            </div>
          </Col>
          <Col span={12}>
            <p className="mb--1">Language:</p>
            <div className="profile_stat__desc__scrollable_value_container">
              {profileStatDescLang?.map(({ key, value }) => (
                <div className="mb--2" key={key}>
                  {value}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </CTContainer>
  );
};

export default ProfileStatus;
