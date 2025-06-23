import { useCallback, useState } from 'react';

import { CheckOutlined } from '@ant-design/icons';
import { Input, InputProps, Row, Space } from 'antd';
import cx from 'classnames';

import { CTContainer } from '@/components';

import { dishList } from '../../Dishes.constant';
import { DishListObj } from '../../Dishes.type';

import { DishListSectionProps } from './DishListSection.type';

import './DishListSection.style.scss';

const DishListSection: React.FC<DishListSectionProps> = ({ onSelectDish }) => {
  const [selectedDish, setSelectedDish] = useState('');
  const [filteredDishList, setFilteredDishList] = useState(dishList);

  const handleOnSearch = (val: string) => {
    setFilteredDishList(
      dishList?.filter((el) => el?.title?.toLowerCase()?.includes(val))
    );
  };

  const handleOnChangeSearch: InputProps['onChange'] = ({
    target: { value },
  }) => {
    if (!value) {
      setFilteredDishList(dishList);
    }
  };

  const handleSelectDish = useCallback(
    (dish: DishListObj) => {
      setSelectedDish(dish.title);
      onSelectDish(dish);
    },
    [onSelectDish]
  );

  return (
    <section className="dish_list_section">
      <CTContainer theme="blue">
        <Input.Search
          className="mb--2"
          allowClear
          onSearch={handleOnSearch}
          onChange={handleOnChangeSearch}
          placeholder="Search Dish Name"
        />
        <div className="dish_list_scrollable">
          {filteredDishList?.map((el) => {
            const isSelected = el?.title === selectedDish;
            return (
              <Row
                className={cx(
                  'dish_list_container',
                  isSelected && '--selected'
                )}
                key={el?.title}
                onClick={() => handleSelectDish(el)}>
                <Space className="dish_wrapper">
                  {isSelected && <CheckOutlined />}
                  <p className="dish_name">{el?.title}</p>
                </Space>
              </Row>
            );
          })}
        </div>
      </CTContainer>
    </section>
  );
};

export default DishListSection;
