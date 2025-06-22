import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutDashboardLoader } from '@/layouts/dashboard';

const DishesPage = lazy(() => import('./Dishes.page'));

export const Dishes = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <DishesPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
