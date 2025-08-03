import { useMemo } from 'react';

import { Carousel, Image, Spin } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

import { CTContainer } from '@/components';

import { DishImageSectionProps } from './type';

import './style.scss';

const DishImageSection: React.FC<DishImageSectionProps> = ({
  imageUrl = [],
  imageTitle = 'Dish Preview',
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const imageHeight = useMemo(() => (isDesktop ? 400 : 200), [isDesktop]);

  const dynamicImages = useMemo(() => {
    const generateImgUrl = (imgName: string) => {
      return `/images/${imgName}`;
    };

    const placeholder = (
      <div className="img-placeholder" style={{ height: imageHeight }}>
        <Spin size="large" />
        Loading
      </div>
    );

    // render carousel if img are more than one
    if (imageUrl?.length > 1) {
      return (
        <Carousel arrows adaptiveHeight autoplay dots={false}>
          {imageUrl?.map((el) => {
            const completeUrl = generateImgUrl(el);
            return (
              <Image
                key={el}
                width="100%"
                height={imageHeight}
                src={completeUrl}
                loading="lazy"
                placeholder={placeholder}
              />
            );
          })}
        </Carousel>
      );
    }

    // single image
    return (
      <Image
        width="100%"
        height={imageHeight}
        src={generateImgUrl(imageUrl?.[0] || '')}
        loading="lazy"
        placeholder={placeholder}
      />
    );
  }, [imageUrl, imageHeight]);

  return (
    <section className="dish_image_section">
      <CTContainer theme="black" title={imageTitle} style={{ opacity: '100%' }}>
        {dynamicImages}
      </CTContainer>
    </section>
  );
};

export default DishImageSection;
