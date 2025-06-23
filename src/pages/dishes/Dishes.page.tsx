import { useMediaQuery } from 'usehooks-ts';

import { CTLayoutDashboard } from '@/layouts';

const ExperiencesPage: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <CTLayoutDashboard
      className="dishes_page"
      {...(!isDesktop ? { titlePage: 'DISHES' } : {})}></CTLayoutDashboard>
  );
};

export default ExperiencesPage;
