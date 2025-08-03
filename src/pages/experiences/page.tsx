import { useMemo, useState } from 'react';

import { Col, Modal, Row, Typography } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import EducationIc from '@/assets/icons/education-ic.svg';
import InfoIc from '@/assets/icons/info-ic.svg';
import PlaceIc from '@/assets/icons/location-ic.svg';
import TimeIc from '@/assets/icons/time-ic.svg';
import WorkIc from '@/assets/icons/work-ic.svg';
import {
  CTContainer,
  CTTimeline,
  CTTitle,
  ProfileBackgroundVideo,
} from '@/components';
import { ctColorDanger } from '@/constants/theme';
import { CTLayoutDashboard } from '@/layouts';

import { experiences } from './constants';

import './style.scss';

const DishesPage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [descModal, setDescModal] = useState<Record<string, any> | null>();

  const items = useMemo(() => {
    return experiences.map((el) => {
      const imgSrc = el?.type === 'education' ? EducationIc : WorkIc;

      const handleOnClickItem = () => {
        setDescModal({ open: true, data: el });
      };

      return {
        children: (
          <div className="item_container" onClick={handleOnClickItem}>
            <Row justify="space-between">
              <div className="title_date_container">
                <div className="title_container">{el?.title}</div>
                <div className="date_container">{el?.date}</div>
              </div>
              <div className="img_container">
                <img alt="exeprience-ic" src={imgSrc} height={50} width={50} />
              </div>
            </Row>
          </div>
        ),
      };
    });
  }, []);

  const handleOnCloseDescModal = () => {
    setDescModal(null);
  };

  return (
    <CTLayoutDashboard
      className="experiences_page"
      backgroundVideo={<ProfileBackgroundVideo />}
      {...(!isDesktop ? { titlePage: 'EXPERIENCES' } : {})}>
      <Row style={{ marginTop: !isDesktop ? 200 : 0 }}>
        <Col md={10} xs={24}>
          {isDesktop && <CTTitle title="Experiences" />}
          <CTContainer theme="blue">
            <CTTimeline items={items} />
          </CTContainer>
        </Col>
      </Row>

      <Modal
        open={Boolean(descModal?.open)}
        onCancel={handleOnCloseDescModal}
        footer={null}
        title={descModal?.data?.title}>
        <Row>
          <Col span={3}>
            <img alt="place-ic" src={PlaceIc} height={32} width={32} />
          </Col>
          <Col span={21}>
            <Typography.Title level={4} style={{ color: ctColorDanger[1] }}>
              {descModal?.data?.place}
            </Typography.Title>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <img alt="place-ic" src={TimeIc} height={32} width={32} />
          </Col>
          <Col span={21}>
            <Typography.Title level={4} style={{ color: ctColorDanger[0] }}>
              {descModal?.data?.date}
            </Typography.Title>
          </Col>
        </Row>
        <div
          style={{
            marginTop: 20,
            maxHeight: isDesktop ? '55dvh' : '30dvh',
            overflowY: 'scroll',
          }}>
          {descModal?.data?.description?.map((el: string, idx: number) => (
            <Row
              key={`${descModal?.data?.title}-${descModal?.data?.date}-desc-${idx}`}
              style={{ marginBottom: 12, marginLeft: 20 }}>
              <Col span={2}>
                <img alt="desc-ic" src={InfoIc} height={20} width={20} />
              </Col>
              <Col span={20}>{el}</Col>
            </Row>
          ))}
        </div>
      </Modal>
    </CTLayoutDashboard>
  );
};

export default DishesPage;
