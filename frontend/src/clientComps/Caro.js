import { Carousel } from 'antd';
import Castle from "./../Media/castle.png";
import styled from 'styled-components';

const contentStyle = {
  margin: 0,
    
  height: 'auto',
  color: '#black',
  lineHeight: '160px',
  textAlign: 'center',
  
};
export const Caro = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <CarouselWrapper>
    <Carousel  afterChange={onChange}>
      <div>
        <img src={Castle} />
      </div>
      <div>
      <img src={Castle} />
      </div>
      <div>
      <img src={Castle} />
      </div>
      <div>
      <img src={Castle} />
      </div>
    </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: red;
  }
`;