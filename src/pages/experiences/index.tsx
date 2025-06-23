import { Suspense, lazy } from 'react';

import { CTErrorBoundary } from '@/components';
import { CTLayoutDashboardLoader } from '@/layouts/dashboard';

const ExperiencesPage = lazy(() => import('./Experiences.page'));

export const Experiences = () => {
  return (
    <CTErrorBoundary>
      <Suspense fallback={<CTLayoutDashboardLoader />}>
        <ExperiencesPage />
      </Suspense>
    </CTErrorBoundary>
  );
};
