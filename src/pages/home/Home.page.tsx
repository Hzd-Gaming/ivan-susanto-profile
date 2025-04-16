import { CTLayoutDashboard } from '@/layouts';

import './Home.style.scss';
import { kHomePageMeta } from './Home.constant';

const HomePage: React.FC = () => {
  return <CTLayoutDashboard meta={kHomePageMeta}></CTLayoutDashboard>;
};

export default HomePage;
