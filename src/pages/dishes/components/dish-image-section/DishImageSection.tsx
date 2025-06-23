import { useMemo } from 'react';

import { Carousel, Image } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import { CTContainer } from '@/components';

import { DishImageSectionProps } from './DishImageSection.type';

import './DishImageSection.style.scss';

const DishImageSection: React.FC<DishImageSectionProps> = ({
  imageUrl = [],
  imageTitle = 'Dish Preview',
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const imageHeight = useMemo(() => (isDesktop ? 400 : 200), [isDesktop]);

  return (
    <section className="dish_image_section">
      <CTContainer theme="black" title={imageTitle} style={{ opacity: '100%' }}>
        {imageUrl?.length > 1 ? (
          <Carousel arrows adaptiveHeight autoplay dots={false}>
            {imageUrl?.map((el) => {
              const completeUrl = new URL(
                `/src/assets/images/${el}`,
                import.meta.url
              )?.href;
              return (
                <Image
                  key={el}
                  width="100%"
                  height={imageHeight}
                  src={completeUrl}
                />
              );
            })}
          </Carousel>
        ) : (
          <Image
            width="100%"
            height={imageHeight}
            src={
              new URL(`/src/assets/images/${imageUrl?.[0]}`, import.meta.url)
                ?.href
            }
          />
        )}
      </CTContainer>
    </section>
  );
};

export default DishImageSection;
