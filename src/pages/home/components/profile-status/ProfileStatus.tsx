import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Carousel, Col, Rate, Row, RowProps, Space } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import culinaryIcSrc from '@/assets/icons/culinary-ic.svg';
import kitchenKnifeIcSrc from '@/assets/icons/kitchen-knife-ic.svg';
import { CTContainer } from '@/components';

import {
  profileStatDescLang,
  profileStatDescTickets,
} from '../../Home.constant';

import './ProfileStatus.style.scss';

const Section1: React.FC<{ justify?: RowProps['justify'] }> = ({
  justify = 'start',
}) => {
  return (
    <div className="section_1">
      <p className="mb--1">Skills:</p>
      <div className="profile_stat__desc__scrollable_value_container">
        {profileStatDescTickets?.map(({ value }, idx) => (
          <Row key={`profile_stat_skill_${idx}`} justify={justify}>
            <Space>
              <img
                alt="knife-ic"
                src={kitchenKnifeIcSrc}
                height={24}
                width={24}
              />
              <text className="profile_stat__desc__scrollable_value">
                {value}
              </text>
            </Space>
          </Row>
        ))}
      </div>
    </div>
  );
};

const Section2: React.FC<{ justify?: RowProps['justify'] }> = ({
  justify = 'start',
}) => {
  return (
    <div className="section_2">
      <p className="mb--1">Language:</p>
      <div className="profile_stat__desc__scrollable_value_container">
        {profileStatDescLang?.map(({ value, rate }, idx) => (
          <Row
            key={`profile_stat_lang_${idx}`}
            className="mb--2"
            justify={justify}>
            <Space align="start">
              <img
                alt="culinary-ic"
                src={culinaryIcSrc}
                height={24}
                width={24}
              />
              <Space direction="vertical" size={1}>
                <p className="profile_stat__desc__scrollable_value">{value}</p>
                <Rate allowHalf disabled defaultValue={rate} />
              </Space>
            </Space>
          </Row>
        ))}
      </div>
    </div>
  );
};

const ProfileStatus: React.FC = () => {
  const isXsMobile = useMediaQuery('(max-width: 467px)');

  return (
    <CTContainer theme="blue" title="Status">
      <div className="profile_stat__desc mt--2 ">
        <Space className="mb--1" size={24}>
          <p>Job:</p>
          <Row justify="center" style={{ width: '100%' }}>
            <p className="profile_stat__desc__job_value">CHEF DE PARTIE</p>
          </Row>
        </Space>
        {!isXsMobile ? (
          <Row gutter={24}>
            <Col className="profile_stat__desc__col_left_container" span={12}>
              <Section1 />
            </Col>
            <Col span={12}>
              <Section2 />
            </Col>
          </Row>
        ) : (
          <Carousel
            dots={false}
            arrows={true}
            infinite={false}
            draggable={false}
            prevArrow={<DoubleLeftOutlined />}
            nextArrow={<DoubleRightOutlined />}>
            <Section1 justify="center" />
            <Section2 justify="center" />
          </Carousel>
        )}
      </div>
    </CTContainer>
  );
};

export default ProfileStatus;
