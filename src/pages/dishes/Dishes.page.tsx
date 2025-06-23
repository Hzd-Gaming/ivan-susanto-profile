import { useState } from 'react';

import { Col, Row } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import { CTTitle } from '@/components';
import { CTLayoutDashboard } from '@/layouts';

import { DishImageSection, DishListSection } from './components';
import {
  ctPageMeta,
  leftColProps,
  middleColProps,
  rightColProps,
  rowProps,
} from './Dishes.constant';
import { DishListObj } from './Dishes.type';

const ExperiencesPage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isXsMobile = useMediaQuery('(max-width: 575px)');

  const [selectedDish, setSelectedDish] = useState<DishListObj | undefined>();

  const handleOnSelectDish = (val: DishListObj) => {
    setSelectedDish(val);
  };

  return (
    <CTLayoutDashboard
      className="dishes_page"
      meta={ctPageMeta}
      {...(!isDesktop ? { titlePage: 'DISHES' } : {})}>
      <Row {...rowProps}>
        <Col {...leftColProps}>
          <section>
            {isXsMobile ? (
              <>
                <CTTitle title="Name List" />
                <DishListSection onSelectDish={handleOnSelectDish} />
                <DishImageSection
                  imageTitle={selectedDish?.title}
                  imageUrl={selectedDish?.imageUrl}
                />
              </>
            ) : (
              <Row align="middle" style={{ height: '65dvh' }}>
                <div style={{ width: '100%' }}>
                  <DishImageSection
                    imageTitle={selectedDish?.title}
                    imageUrl={selectedDish?.imageUrl}
                  />
                </div>
              </Row>
            )}
          </section>
        </Col>
        <Col {...middleColProps} />
        <Col {...rightColProps}>
          {!isXsMobile && (
            <>
              <CTTitle title={!isDesktop ? 'Name List' : 'Dishes'} />
              <DishListSection onSelectDish={handleOnSelectDish} />
            </>
          )}
        </Col>
      </Row>
    </CTLayoutDashboard>
  );
};

export default ExperiencesPage;
