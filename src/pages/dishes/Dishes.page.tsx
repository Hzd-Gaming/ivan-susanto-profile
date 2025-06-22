import { useMediaQuery } from 'usehooks-ts';

import { CTLayoutDashboard } from '@/layouts';

const DishesPage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <CTLayoutDashboard
      className="dishes_page"
      {...(!isDesktop ? { titlePage: 'DISHES' } : {})}>
      Dishes
    </CTLayoutDashboard>
  );
};

export default DishesPage;
