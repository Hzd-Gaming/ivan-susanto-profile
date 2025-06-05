import { useRef } from 'react';

import { CloseOutlined, MenuOutlined, SoundOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import cx from 'classnames';
import { useMediaQuery } from 'usehooks-ts';

import './Header.style.scss';

import { useComponentStore } from '@/stores/common';

import { CTLayoutDashboardHeaderProps } from './Header.type';

const { Header } = Layout;

const CTLayoutDashboardHeader: React.FC<CTLayoutDashboardHeaderProps> = ({
  titlePage,
}) => {
  const headerRef = useRef<HTMLElement>(null);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const {
    isBackgroundMusicMuted,
    updateIsSidebarOpen,
    updateSidebarType,
    updateIsBackgroundMusicMuted,
  } = useComponentStore((state) => state);

  return (
    <Header
      className={cx(
        'ct_layout_dashboard__header',
        !isDesktop && 'ct_layout_dashboard__header--mobile'
      )}
      ref={headerRef}>
      <div>
        {!isDesktop && (
          <MenuOutlined
            className="mr--4"
            onClick={() => {
              updateSidebarType('filter');
              updateIsSidebarOpen(true);
            }}
          />
        )}
      </div>

      <p className="ct_layout_dashboard__header__title">{titlePage}</p>

      <div
        onClick={() => updateIsBackgroundMusicMuted(!isBackgroundMusicMuted)}
        className="ml--2"
        style={{ cursor: 'pointer' }}>
        {isBackgroundMusicMuted ? (
          <Space size={0} align="center">
            <SoundOutlined />
            <CloseOutlined />
          </Space>
        ) : (
          <SoundOutlined />
        )}
      </div>
    </Header>
  );
};

export default CTLayoutDashboardHeader;
