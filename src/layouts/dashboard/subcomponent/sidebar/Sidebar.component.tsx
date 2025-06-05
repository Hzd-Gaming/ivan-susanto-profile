import { Drawer } from 'antd';

import { CTMenuList } from '@/components';
import { contactOptions, menuOptions } from '@/constants/common';
import { useComponentStore } from '@/stores/common';

import { CTLayputDashboardSidebarProps } from './Sidebar.types';

import './Sidebar.style.scss';

const CTLayoutDashboardSidebar: React.FC<CTLayputDashboardSidebarProps> = (
  props
) => {
  const { isSidebarOpen, updateIsSidebarOpen } = useComponentStore(
    (state) => state
  );

  return (
    <Drawer
      className="ct_layout_dashboard__sidebar"
      open={isSidebarOpen}
      placement="left"
      width={325}
      title="Main Menu"
      onClose={() => updateIsSidebarOpen(false)}
      {...props}>
      <CTMenuList
        title="About"
        list={menuOptions}
        clickable
        listWrapperContainerProps={{
          className: 'mb--10 pb--4',
        }}
      />
      <CTMenuList title="Contact" list={contactOptions} />
    </Drawer>
  );
};

export default CTLayoutDashboardSidebar;
