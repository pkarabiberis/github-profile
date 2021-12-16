import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

interface DropDownProps {
  sortRepos: (val: string) => void;
}

const Container = styled.div`
  margin-top: 25px;
  text-align: center;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 32px;
  }

  .dropdown {
    text-align: end;

    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 20px;
    }

    select {
      background-color: transparent;
      color: ${theme.colors.white};
    }

    option {
      background-color: transparent;
      color: ${theme.colors.black};
    }

    label {
      margin-right: 10px;
    }
  }
`;

export const DropDown: React.FC<DropDownProps> = ({ sortRepos }) => {
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    sortRepos(value);
  };

  return (
    <Container>
      <h1>Repositories</h1>
      <div className="dropdown">
        <label htmlFor="sort-select">sort by</label>
        <select onChange={handleSort} name="filters" id="sort-select">
          <option value="stars">stars</option>
          <option value="forks">forks</option>
          <option value="size">size</option>
        </select>
      </div>
    </Container>
  );
};
