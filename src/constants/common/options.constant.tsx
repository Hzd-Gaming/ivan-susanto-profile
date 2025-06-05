import {
  EnvironmentOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';

import { CTMenuListList } from '@/components/ct-menu-list/CTMenuList.types';
import { RouteEndpointsCommon } from '@/constants/route-endpoint';

export const menuOptions: CTMenuListList = [
  {
    key: 'exp',
    label: 'Experiences',
    path: RouteEndpointsCommon.EXPERIENCES,
  },
  {
    key: 'dishes',
    label: 'Dishes',
    path: RouteEndpointsCommon.DISHES,
  },
];

const spaceSize = 8;
export const contactOptions: CTMenuListList = [
  {
    key: 'email',
    label: (
      <Space size={spaceSize}>
        <MailOutlined />
        ivansanto@ymail.com
      </Space>
    ),
  },
  {
    key: 'wa',
    label: (
      <Space size={spaceSize}>
        <WhatsAppOutlined />
        {'+62-857-7757-6450'}
      </Space>
    ),
  },
  {
    key: 'hp',
    label: (
      <Space size={spaceSize}>
        <PhoneOutlined />
        {'+1 (403) 431-4901'}
      </Space>
    ),
  },
  {
    key: 'address',
    label: (
      <Space size={spaceSize}>
        <HomeOutlined />
        Bogor, Indonesia
      </Space>
    ),
  },
  {
    key: 'loc',
    label: (
      <Space size={spaceSize}>
        <EnvironmentOutlined />
        Banff, Alberta, Canada
      </Space>
    ),
  },
  {
    key: 'linkedin',
    label: (
      <Space size={spaceSize}>
        <LinkedinOutlined />
        <a
          href="https://www.linkedin.com/in/ivan-susanto-a93433143"
          target="_blank">
          My linkedin profile
        </a>
      </Space>
    ),
  },
];
