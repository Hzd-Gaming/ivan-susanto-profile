import { Rate, Space } from 'antd';

import culinaryIcSrc from '@/assets/icons/culinary-ic.svg';
import kitchenKnifeIcSrc from '@/assets/icons/kitchen-knife-ic.svg';
import { TComponentSeoMeta } from '@/types/common';

export const kHomePageMeta: TComponentSeoMeta = {
  descriptionPage: 'Home page for Ivan Susanto Profile',
  titlePage: 'Ivan Susanto Profile',
};

export const profileStatDescTickets = [
  {
    key: 't1',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          HACCP FOOD SAFETY
        </p>
      </Space>
    ),
  },
  {
    key: 't2',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          INDONESIAN CUISINE
        </p>
      </Space>
    ),
  },
  {
    key: 't3',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          THAI CUISINE
        </p>
      </Space>
    ),
  },
  {
    key: 't4',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          GLUTEN FREE
        </p>
      </Space>
    ),
  },
  {
    key: 't5',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          MIDDLE EASTERN
        </p>
      </Space>
    ),
  },
  {
    key: 't6',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">PIZZA</p>
      </Space>
    ),
  },
  {
    key: 't7',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">SUSHI</p>
      </Space>
    ),
  },
  {
    key: 't8',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          OMAKASE
        </p>
      </Space>
    ),
  },
  {
    key: 't9',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          FUSION
        </p>
      </Space>
    ),
  },
  {
    key: 't10',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          ITALIAN
        </p>
      </Space>
    ),
  },
  {
    key: 't11',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          MEDITERANIAN
        </p>
      </Space>
    ),
  },
  {
    key: 't12',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          FRENCH
        </p>
      </Space>
    ),
  },
  {
    key: 't13',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          WESTERN
        </p>
      </Space>
    ),
  },
  {
    key: 't14',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          LUXURY HOTEL EXP
        </p>
      </Space>
    ),
  },
  {
    key: 't15',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          5* EXPERIENCE
        </p>
      </Space>
    ),
  },
  {
    key: 't16',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          COST CONTROL
        </p>
      </Space>
    ),
  },
  {
    key: 't17',
    value: (
      <Space>
        <img alt="knife-ic" src={kitchenKnifeIcSrc} height={24} width={24} />
        <p className="home_page__profile_stat__desc__scrollable_value">
          MENU PLANNING
        </p>
      </Space>
    ),
  },
];

export const profileStatDescLang = [
  {
    key: 'c1',
    value: (
      <Space size={1}>
        <img alt="culinary-ic" src={culinaryIcSrc} height={24} width={24} />
        <Space direction="vertical" size={1}>
          <p className="home_page__profile_stat__desc__scrollable_value">
            Indonesian
          </p>
          <Rate allowHalf disabled defaultValue={5} />
        </Space>
      </Space>
    ),
  },
  {
    key: 'c2',
    value: (
      <Space size={1}>
        <img alt="culinary-ic" src={culinaryIcSrc} height={24} width={24} />
        <Space direction="vertical" size={1}>
          <p className="home_page__profile_stat__desc__scrollable_value">
            English
          </p>
          <Rate allowHalf disabled defaultValue={4.5} />
        </Space>
      </Space>
    ),
  },
  {
    key: 'c3',
    value: (
      <Space size={1}>
        <img alt="culinary-ic" src={culinaryIcSrc} height={24} width={24} />
        <Space direction="vertical" size={1}>
          <p className="home_page__profile_stat__desc__scrollable_value">
            Japanese
          </p>
          <Rate allowHalf disabled defaultValue={3.5} />
        </Space>
      </Space>
    ),
  },
  {
    key: 'c4',
    value: (
      <Space size={1}>
        <img alt="culinary-ic" src={culinaryIcSrc} height={24} width={24} />
        <Space direction="vertical" size={1}>
          <p className="home_page__profile_stat__desc__scrollable_value">
            Japanese
          </p>
          <Rate allowHalf disabled defaultValue={3} />
        </Space>
      </Space>
    ),
  },
];

export const rowProps = { gutter: 24 };
export const leftColProps = { xs: 24, sm: 14, md: 10 };
export const middleColProps = { xs: 0, sm: 9, md: 3, lg: 5 };
export const rightColProps = { xs: 24, sm: 24, md: 11, lg: 9 };
