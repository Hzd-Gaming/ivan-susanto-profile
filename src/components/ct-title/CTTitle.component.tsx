import { useMemo } from 'react';

import { Row } from 'antd';

import { CTTitleProps } from './CTTitle.type';

import './CTTitle.style.scss';

const CTTitle: React.FC<CTTitleProps> = ({ title }) => {
  const dynamicTitle = useMemo(() => {
    if (typeof title === 'string') {
      return <p className="text">{title}</p>;
    }

    return title;
  }, [title]);
  return (
    <div className="ct_title">
      <div className="wrapper">
        <Row justify="center">{dynamicTitle}</Row>
      </div>
    </div>
  );
};

export default CTTitle;
