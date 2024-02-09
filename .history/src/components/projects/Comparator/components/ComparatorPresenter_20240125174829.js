import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import productsData from '../data';

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

const Slide = styled(animated.div)`
  width: 100%;
  will-change: transform;
`;

const SlideIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [props, set] = useSpring(() => ({
    transform: `translateY(${0 * 100}%)`,
  }));

  useEffect(() => {
    set({ transform: `translateY(${-activeSlide * 100}%)` });
  }, [activeSlide, set]);

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setActiveSlide((prev) =>
        prev < productsData.length - 1 ? prev + 1 : prev,
      );
    } else {
      setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <SliderContainer onWheel={handleWheel}>
      {productsData.map((product, index) => (
        <Slide
          key={product.id}
          style={{
            ...props,
            backgroundImage: `url(${product.primaryImage})`,
          }}
        >
          {/* Place your product details here */}
        </Slide>
      ))}
      <SlideIndicator>{activeSlide + 1}</SlideIndicator>
    </SliderContainer>
  );
};

export default ProductSlider;
