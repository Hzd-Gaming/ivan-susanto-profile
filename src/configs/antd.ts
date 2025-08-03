import { ThemeConfig } from 'antd';

import {
  ctColorBackground,
  ctColorNeutral,
  ctColorPrimary,
} from '@/constants/theme';

export const antdTheme: ThemeConfig = {
  components: {
    Input: {
      colorText: ctColorNeutral[4],
    },
    Layout: {
      siderBg: ctColorBackground.dashboard,
      triggerBg: 'transparent',
      triggerColor: ctColorNeutral.main,
    },
    Switch: {
      colorPrimary: ctColorPrimary[3],
      colorPrimaryHover: ctColorPrimary[4],
    },
    Timeline: {
      tailColor: ctColorNeutral.main,
      itemPaddingBottom: 50,
    },
    Modal: {
      contentBg: ctColorNeutral[4],
      headerBg: ctColorNeutral[4],
      titleColor: ctColorPrimary.main,
      titleFontSize: 20,
      colorIcon: ctColorNeutral.main,
    },
  },
  token: {
    fontFamily: 'Comic Relief, sans-serif',
    borderRadius: 8,
    colorLink: ctColorPrimary.main,
    colorPrimary: ctColorPrimary.main,
    colorText: ctColorNeutral.main,
  },
};
