import { TComponentSeoMeta } from '@/types/common';

import { DishList } from './Dishes.type';

export const ctPageMeta: TComponentSeoMeta = {
  descriptionPage: 'List of dishes created by chef Ivan Susanto',
  titlePage: 'Ivan Susanto Dishes',
};

export const rowProps = { gutter: 24 };
export const leftColProps = { xs: 24, sm: 12, md: 12, lg: 11 };
export const middleColProps = { xs: 0, sm: 0, md: 0, lg: 2 };
export const rightColProps = { xs: 24, sm: 12, md: 12, lg: 11 };

export const dishList: DishList = [
  {
    title: 'Fruit Platter',
    imageUrl: ['Fruit platter.jpg', 'Fruit Platter(1).jpg'],
  },
  { title: 'Greek Skewer', imageUrl: ['Greek skewer.jpg'] },
  { title: 'Beetroot Orange Salad', imageUrl: ['Beetroot orange salad.jpg'] },
  { title: 'Yari Ika', imageUrl: ['Yari Ika.jpg'] },
  {
    title: 'Sushi Sashimi Moriawase',
    imageUrl: ['Sushi Sashimi Moriawase.jpg'],
  },
  { title: 'Hamachi Ceviche', imageUrl: ['Hamachi ceviche.jpg'] },
  { title: 'Chocolate Trilogy', imageUrl: ['Chocolate trilogy.jpg'] },
  {
    title: 'Ham and Cheese Sandwich',
    imageUrl: ['Ham and cheese sandwich.jpg'],
  },
  { title: 'Salmon Tataki', imageUrl: ['Salmon tataki.jpg'] },
  { title: 'Clam Ceviche', imageUrl: ['Clam Ceviche.jpg'] },
  { title: 'Hamachi Crudo', imageUrl: ['Hamachi crudo.jpg'] },
  { title: 'Gyoza', imageUrl: ['Gyoza.jpg'] },
  {
    title: 'Maguro Tataki',
    imageUrl: ['Maguro tataki(1)', 'Maguro tataki.jpg'],
  },
  { title: 'Assorted Charcuterie', imageUrl: ['Assorted Charcuterie_.jpg'] },
  { title: 'Assorted Fruits', imageUrl: ['Assorted fruits.jpg'] },
  { title: 'Insalata Frute de Mare', imageUrl: ['Assorted fruits.jpg'] },
  { title: 'Crudite', imageUrl: ['Crudite.jpg'] },
  { title: 'Miso Black Cod', imageUrl: ['Miso black cod.jpg'] },
  { title: 'Yasai Udon', imageUrl: ['Yasai udon.jpg'] },
  { title: 'King Fish Ceviche', imageUrl: ['King fish ceviche.jpg'] },
  { title: 'Smoked Salmon', imageUrl: ['Smoked Salmon.jpg'] },
  { title: 'King Crab Salad', imageUrl: ['King crab salad.jpg'] },
  { title: 'Cheese Platter', imageUrl: ['Cheese Platter.jpg'] },
  { title: 'Canape Mozarela Skewer', imageUrl: ['Canape mozarela skewer.jpg'] },
  { title: 'Salmon Tartare', imageUrl: ['Salmon tartare.jpg'] },
  { title: 'Mango Sticky Rice', imageUrl: ['Mango Sticky Rice.jpg'] },
  { title: 'California Maki', imageUrl: ['California Maki.jpg'] },
  {
    title: 'Mini tuna tataki with Quail Egg',
    imageUrl: ['Mini tuna tataki with quail egg_.jpg'],
  },
  { title: 'Beetroot Feta Salad', imageUrl: ['Beetroot feta salad.jpg'] },
  { title: 'Red Touile', imageUrl: ['Red touile.jpg'] },
  { title: 'Assorted Sushi', imageUrl: ['Assorted sushi.jpg'] },
  { title: 'Burata Salad', imageUrl: ['Burata salad.jpg'] },
  { title: 'Tomato Mozzarella', imageUrl: ['Tomato mozzarella.jpg'] },
  { title: 'Thai Chicken Pandan', imageUrl: ['Thai Chicken Pandan.jpg'] },
  { title: 'Sashimi Moriawase', imageUrl: ['Sashimi Moriawase.jpg'] },
  { title: 'Beetroot Ceviche', imageUrl: ['Beetroot ceviche.jpg'] },
  {
    title: 'Sweet Potato and Goat Cheese Salad',
    imageUrl: ['Sweet potato and goat cheese salad.jpg'],
  },
  { title: 'Tuna Tostada', imageUrl: ['Tuna tostada.jpg'] },
  { title: 'Nigiri Moriawase', imageUrl: ['Nigiri Moriawase.jpg'] },
  { title: 'California Ebi Maki', imageUrl: ['California- Ebi Maki.jpg'] },
  {
    title: 'Sumber Corn Salad Canape',
    imageUrl: ['Sumber corn salad canape.jpg'],
  },
  { title: 'Ceviche Platter', imageUrl: ['Ceviche platter.jpg'] },
  { title: 'Simple Canape', imageUrl: ['Simple Canape.jpg'] },
  { title: 'Shrimp Dumpling', imageUrl: ['Shrimp dumpling.jpg'] },
  { title: 'Otoro, Chutoro, Akami', imageUrl: ['Otoro, chutoro, akami.jpg'] },
  { title: 'Beetroot Carpaccio', imageUrl: ['Beetroot carpaccio.jpg'] },
  { title: 'Mini Poke Bowl', imageUrl: ['Mini poke bowl.jpg'] },
  { title: 'Mouhallabia', imageUrl: ['Mouhallabia.jpg'] },
  { title: 'Negi Toro Maki', imageUrl: ['Negi Toro maki.jpg'] },
  { title: 'Salmon Avocado Maki', imageUrl: ['Salmon avocado maki.jpg'] },
  { title: 'Red Velvet', imageUrl: ['Red velvet.jpg'] },
  { title: 'Quinoa Salad', imageUrl: ['Quinoa Salad.jpg'] },
  {
    title: 'Thai Minced Beef Omelette',
    imageUrl: ['Thai Minced Beef Omelette.jpg'],
  },
].sort((a, b) => a.title.localeCompare(b.title));
