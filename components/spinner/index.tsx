import React from 'react';
import { Container, Loader } from './style';

const Spinner = () => {
  return (
    <Container>
      <Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </Container>
  );
};

export default Spinner;
