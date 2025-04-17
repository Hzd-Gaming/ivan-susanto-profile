import { Button, Result } from 'antd';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { RouteEndpointsCommon } from '@/constants/route-endpoint';
import { useComponentStore } from '@/stores/common';

import './404.style.scss';

const Error404: React.FC = () => {
  const { isBackgroundMusicMuted } = useComponentStore((state) => state);
  return (
    <main
      className={cx(
        'error_404_page',
        isBackgroundMusicMuted && 'error_404_page--dark'
      )}>
      <Result
        className={cx(
          'error_404_page__illust',
          isBackgroundMusicMuted && 'error_404_page__illust--dark'
        )}
        status="404"
        title="Oops..."
        subTitle="Sorry, the page you requested does not exist."
        extra={
          <Link to={RouteEndpointsCommon.HOME}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </main>
  );
};

export default Error404;
