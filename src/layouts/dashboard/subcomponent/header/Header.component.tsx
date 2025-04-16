import { useRef } from 'react';

import { FilterTwoTone, QuestionCircleTwoTone } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import cx from 'classnames';

import './Header.style.scss';

import { kColorNeutral, kColorPrimary } from '@/constants/theme';
import { useComponentStore } from '@/stores/common';

const { Header } = Layout;

const CTLayoutDashboardHeader: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { isDarkMode, updateIsSidebarOpen, updateSidebarType } =
    useComponentStore((state) => state);

  return (
    <Header
      className={cx(
        'ct_layout_dashboard__header',
        isDarkMode && 'ct_layout_dashboard__header--dark'
      )}
      ref={headerRef}>
      <FilterTwoTone
        className="mr--2"
        style={{ fontSize: 18 }}
        twoToneColor={isDarkMode ? kColorPrimary[3] : kColorNeutral[5]}
        onClick={() => {
          updateSidebarType('filter');
          updateIsSidebarOpen(true);
        }}
      />
      <Space align="center">
        <h3>Profile</h3>
      </Space>

      <QuestionCircleTwoTone
        className="ml--2"
        style={{ fontSize: 18 }}
        twoToneColor={isDarkMode ? kColorPrimary[3] : kColorPrimary[5]}
        onClick={() => {
          updateSidebarType('info');
          updateIsSidebarOpen(true);
        }}
      />
    </Header>
  );
};

export default CTLayoutDashboardHeader;
