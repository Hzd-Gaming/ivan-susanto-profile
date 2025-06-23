import { useCallback } from 'react';

import { Space } from 'antd';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';

import { useComponentStore } from '@/stores/common';

import { CTMenuListProps } from './CTMenuList.types';

import './CTMenuList.style.scss';

const CTMenuList: React.FC<CTMenuListProps> = ({
  clickable,
  list,
  title,
  listWrapperContainerProps = {},
}) => {
  const navigate = useNavigate();
  const { updateIsSidebarOpen } = useComponentStore((state) => state);

  const handleOnClickMenu = useCallback(
    (path: string | undefined) => {
      if (path && clickable) {
        updateIsSidebarOpen(false);
        navigate(path);
      }
    },
    [clickable, navigate, updateIsSidebarOpen]
  );

  return (
    <div className="ct_menu_list">
      <div className="ct_menu_list__title_wrapper">
        <div className="ct_menu_list__title_wrapper__title">{title}</div>
      </div>
      <div
        {...listWrapperContainerProps}
        className={cx(
          'ct_menu_list__menu_wrapper__container',
          listWrapperContainerProps?.className
        )}>
        {list?.map(({ key, label, path }) => (
          <div key={key} className="ct_menu_list__menu_wrapper">
            <div className="ct_menu_list__menu_wrapper__outer">
              <div
                onClick={() => handleOnClickMenu(path)}
                className={cx(
                  'ct_menu_list__menu_wrapper__inner',
                  !clickable && 'ct_menu_list__menu_wrapper__inner--type2'
                )}>
                <Space
                  size={0}
                  className="ct_menu_list__menu_wrapper__inner__label_wrapper"
                  style={{ width: '100%' }}>
                  {label}
                  {clickable && <div className="hover_effect" />}
                </Space>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return <></>;
};

export default CTMenuList;
