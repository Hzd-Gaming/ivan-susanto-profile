import { useRef } from 'react';

import { CloseOutlined, FilterTwoTone, SoundOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import './Header.style.scss';

import { kColorNeutral, kColorPrimary } from '@/constants/theme';
import { useComponentStore } from '@/stores/common';

const { Header } = Layout;

const CTLayoutDashboardHeader: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  const isDesktop = useMediaQuery('(min-width: 769px)');

  const {
    isBackgroundMusicMuted,
    updateIsSidebarOpen,
    updateSidebarType,
    updateIsBackgroundMusicMuted,
  } = useComponentStore((state) => state);

  return (
    <Header className="ct_layout_dashboard__header" ref={headerRef}>
      <div>
        {!isDesktop && (
          <FilterTwoTone
            className="mr--2"
            style={{ fontSize: 18 }}
            twoToneColor={
              isBackgroundMusicMuted ? kColorPrimary[3] : kColorNeutral[5]
            }
            onClick={() => {
              updateSidebarType('filter');
              updateIsSidebarOpen(true);
            }}
          />
        )}
      </div>

      <p className="ct_layout_dashboard__header__title">PROFILE</p>

      <div
        onClick={() => updateIsBackgroundMusicMuted(!isBackgroundMusicMuted)}
        className="ml--2"
        style={{ cursor: 'pointer' }}>
        {isBackgroundMusicMuted ? (
          <Space size={0} align="center">
            <SoundOutlined style={{ fontSize: 24 }} />
            <CloseOutlined
              style={{
                paddingBottom: 30,
              }}
            />
          </Space>
        ) : (
          <SoundOutlined style={{ fontSize: 24 }} />
        )}
      </div>
    </Header>
  );
};

export default CTLayoutDashboardHeader;
