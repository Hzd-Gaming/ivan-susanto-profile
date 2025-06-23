import { useMediaQuery } from 'usehooks-ts';

import { CTLayoutDashboard } from '@/layouts';

const DishesPage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <CTLayoutDashboard
      className="experiences_page"
      {...(!isDesktop ? { titlePage: 'EXPERIENCES' } : {})}></CTLayoutDashboard>
  );
};

export default DishesPage;
