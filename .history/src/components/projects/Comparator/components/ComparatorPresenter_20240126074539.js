import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import productsData from '../data/productsData';

const SliderContainer = styled.div`
  max-width: 600px; // Set the max-width as needed
  position: relative;
  margin: auto;
  perspective: 1000px; // for parallax depth effect
`;

const Slide = styled(animated.div)`
  width: 100%;
  position: absolute;
  height: 400px; // Set the height as needed
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
`;

const SlideIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndicatorCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? 'black' : 'lightgrey')};
  margin: 5px 0;
`;

const ProductInfo = styled.div`
  color: #333;
  text-align: center;
  z-index: 10;
`;

const ProductModelName = styled.h2`
  font-size: 1.5em;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
`;

const Attribute = styled.div`
  margin: 5px 0;
`;

const MainText = styled.p`
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 0.8em;
`;

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const springProps = useSpring({
    transform: `translateY(${-activeSlide * 100}%)`,
  });

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
            ...springProps,
            backgroundImage: `url(${product.primaryImage})`,
            transform: springProps.transform.interpolate(
              (t) => `${t} rotateY(${index % 2 === 0 ? '-' : ''}10deg)`,
            ), // Simple parallax effect
          }}
        >
          <ProductInfo>
            <ProductModelName>{product.model}</ProductModelName>
            <ProductPrice>{product.price}</ProductPrice>
            {product.attributes.map((attr, idx) => (
              <Attribute key={idx}>
                <MainText>{attr.main}</MainText>
                <SubText>{attr.sub}</SubText>
              </Attribute>
            ))}
          </ProductInfo>
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
