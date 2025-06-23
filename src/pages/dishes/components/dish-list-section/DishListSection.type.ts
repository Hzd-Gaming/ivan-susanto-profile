import { DishListObj } from '../../Dishes.type';

export interface DishListSectionProps {
  onSelectDish: (val: DishListObj) => void;
}
