import { useMemo } from 'react';

import { Row } from 'antd';
import cx from 'classnames';

import { CTTitleProps } from './type';

import './style.scss';

const CTTitle: React.FC<CTTitleProps> = ({ title, className }) => {
  const dynamicTitle = useMemo(() => {
    if (typeof title === 'string') {
      return <p className="text">{title}</p>;
    }

    return title;
  }, [title]);

  return (
    <div className={cx('ct_title', className)}>
      <div className="wrapper">
        <Row justify="center">{dynamicTitle}</Row>
      </div>
    </div>
  );
};

export default CTTitle;
