import { ThemeConfig } from 'antd';

import {
  kColorBackground,
  kColorNeutral,
  kColorPrimary,
} from '@/constants/theme';

export const antdTheme: ThemeConfig = {
  components: {
    Input: {
      colorText: kColorNeutral[4],
    },
    Layout: {
      siderBg: kColorBackground.dashboard,
      triggerBg: 'transparent',
      triggerColor: kColorNeutral.main,
    },
    Switch: {
      colorPrimary: kColorPrimary[3],
      colorPrimaryHover: kColorPrimary[4],
    },
  },
  token: {
    borderRadius: 8,
    colorLink: kColorPrimary.main,
    colorPrimary: kColorPrimary.main,
    colorText: kColorNeutral.main,
    fontFamily: 'inherit',
  },
};
