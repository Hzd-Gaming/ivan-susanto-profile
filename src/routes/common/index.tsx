import type { RouteObject } from 'react-router-dom';

import { RouteEndpointsCommon } from '@/constants/route-endpoint';
import { Dishes } from '@/pages/dishes';
import { Error404 } from '@/pages/error/404';
import { Experiences } from '@/pages/experiences';
import { Home } from '@/pages/home';

const RouterCommon: RouteObject[] = [
  {
    path: RouteEndpointsCommon.HOME,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: RouteEndpointsCommon.DISHES,
    children: [
      {
        index: true,
        element: <Dishes />,
      },
    ],
  },
  {
    path: RouteEndpointsCommon.EXPERIENCES,
    children: [
      {
        index: true,
        element: <Experiences />,
      },
    ],
  },
  { path: '*', element: <Error404 /> },
];

export default RouterCommon;
