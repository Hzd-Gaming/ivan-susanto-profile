import { LoadingOutlined } from '@ant-design/icons';
import { Row } from 'antd';

import '@/styles/scss/utils/_padding.scss';

import './style.scss';
import './components/header/style.scss';

import { ctColorNeutral, ctColorPrimary } from '@/constants/theme';

const CTLayoutDashboardLoader: React.FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ backgroundColor: ctColorNeutral[5], minHeight: '100dvh' }}>
      <LoadingOutlined style={{ color: ctColorPrimary[0], fontSize: 36 }} />
    </Row>
  );
};

export default CTLayoutDashboardLoader;
