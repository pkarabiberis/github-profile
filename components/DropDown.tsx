import React from 'react';
import styled from 'styled-components';

interface DropDownProps {}

const Container = styled.div`
  margin-top: 25px;
  text-align: center;
  width: 100%;

  .dropdown {
    text-align: end;

    label {
      margin-right: 5px;
    }
  }
`;

export const DropDown: React.FC<DropDownProps> = ({}) => {
  return (
    <Container>
      <h1>Repositories</h1>
      <div className="dropdown">
        <label htmlFor="filter-select">filter by</label>
        <select name="filters" id="filter-select">
          <option value="size">size</option>
          <option value="stars">stars</option>
          <option value="forks">forks</option>
        </select>
      </div>
    </Container>
  );
};
