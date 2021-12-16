import React, { ChangeEvent } from 'react';
import { Container } from './style';

interface DropdownProps {
  sortRepos: (val: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ sortRepos }) => {
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

export default Dropdown;
