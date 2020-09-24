import React from 'react';
import Container from './style';

interface LoadingProps {
  background?: boolean;
}

const Loading = ({ background }: LoadingProps) => {
  return (
    <Container background={background}>
      <div className="pokeball">
        <div className="glow"></div>
        <div className="lower-half"></div>
        <div className="lower-half lh2"></div>
        <div className="circle-out">
          <div className="circle-in"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </Container>
  );
};

export default Loading;
