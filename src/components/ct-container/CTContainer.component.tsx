import { useMemo } from 'react';

import cx from 'classnames';

import { CTContainerProps } from './CTContainer.type';

import './CTContainer.style.scss';

const CTContainer: React.FC<CTContainerProps> = ({
  children,
  theme,
  title,
  style = {},
}) => {
  const dynamicTitle = useMemo(() => {
    if (typeof title === 'string') {
      switch (theme) {
        case 'black':
          return (
            <>
              <div className="title__border_top" />
              <h1 className="title__text">{title}</h1>
              <div className="title__border_bottom" />
            </>
          );
        case 'blue':
          return (
            <>
              <h1 className="title__text">{title}</h1>
              <div className="title__border_bottom" />
            </>
          );
      }
    }

    return title;
  }, [theme, title]);
  return (
    <div
      className={cx('ct-container', theme && `ct-container__${theme}`)}
      style={style}>
      {Boolean(title) && dynamicTitle}
      <div className="children">{children}</div>
    </div>
  );
};

export default CTContainer;
