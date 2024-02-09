import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import productsData from '../data/productsData';

const SliderContainer = styled.div`
  max-width: 100%;
  height: 100vh; // Use the full viewport height
  position: relative;
  overflow: hidden;
`;

const Slide = styled(animated.div)`
  width: 100%;
  height: 100vh; // Match the height of the SliderContainer
  position: absolute;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const SlideIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const IndicatorCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 'black' : 'lightgrey'};
  margin: 5px 0;
`;

// Additional styles for text elements go here...

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const springProps = useSpring({
    to: { transform: `translateY(${-activeSlide * 100}%)` }
  });

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setActiveSlide(prev => (prev < productsData.length - 1 ? prev + 1 : prev));
    } else {
      setActiveSlide(prev => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <SliderContainer onWheel={handleWheel}>
      {productsData.map((product, index) => (
        <Slide
          key={product.id}
          style={{
            ...springProps,
            backgroundImage: `url(${product.primaryImage})`
          }}
        >
          {/* Product info and attributes go here */}
        </Slide>
      ))}
      <SlideIndicator>
        {productsData.map((product, index) => (
          <IndicatorCircle key={product.id} active={index === activeSlide} />
        ))}
      </SlideIndicator>
    </SliderContainer>
  );
};

export default ProductSlider;