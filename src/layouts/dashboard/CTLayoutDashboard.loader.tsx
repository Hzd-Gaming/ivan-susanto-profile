import { LoadingOutlined } from '@ant-design/icons';
import { Row } from 'antd';

import '@/styles/scss/utils/_padding.scss';

import './CTLayoutDashboard.style.scss';
import './subcomponent/header/Header.style.scss';

import { kColorNeutral, kColorPrimary } from '@/constants/theme';

const CTLayoutDashboardLoader: React.FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ backgroundColor: kColorNeutral[5], minHeight: '100dvh' }}>
      <LoadingOutlined style={{ color: kColorPrimary[0], fontSize: 36 }} />
    </Row>
  );
};

export default CTLayoutDashboardLoader;
