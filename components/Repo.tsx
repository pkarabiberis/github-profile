import React from 'react';
import styled from 'styled-components';
import { RepoIcon } from '@primer/octicons-react';

interface RepoProps {
  name: string;
  desc: string;
  forks: number;
  stars: number;
  size: number;
  language: string;
}

const Container = styled.li`
  box-shadow: 0 2px 2px 0 black;
  border-radius: 0.25em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .repo-head {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 2px;
    }
  }
`;

export const Repo: React.FC<RepoProps> = ({
  name,
  desc,
  forks,
  stars,
  size,
  language,
}) => {
  return (
    <Container>
      <div className="repo-head">
        <RepoIcon />
        <span>{name}</span>
      </div>
      <p>{desc}</p>
      <div className="repo-footer">
        <span>{language}</span>
      </div>
    </Container>
  );
};
