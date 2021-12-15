import React from 'react';
import styled from 'styled-components';
import { RepoIcon, RepoForkedIcon, StarIcon } from '@primer/octicons-react';
import theme from '../styles/theme';
import { RepoData } from '../mock';

interface RepoProps {
  repo: RepoData;
}

const Container = styled.li`
  box-shadow: 0 2px 2px 0 black;
  border-radius: 0.25em;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${theme.colors.white};

  .repo-head {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      margin-right: 10px;
    }
  }

  p {
    color: ${theme.colors.grey};
  }

  .repo-footer {
    display: flex;
    align-items: center;
    color: ${theme.colors.grey};
  }

  .repo-stat {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 13px;

    &:last-child {
      margin-left: auto;
    }
    svg {
      margin-right: 2px;
    }
  }
`;

export const Repo: React.FC<RepoProps> = ({ repo }) => {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <Container>
        <div className="repo-head">
          <RepoIcon />
          <h3>{repo.name}</h3>
        </div>
        <p>{repo.description}</p>
        <div className="repo-footer">
          <div className="repo-stat">
            <span>{repo.language}</span>
          </div>

          <div className="repo-stat">
            <RepoForkedIcon />
            <span>{repo.forks}</span>
          </div>

          <div className="repo-stat">
            <StarIcon />
            <span>{repo.stargazers_count}</span>
          </div>

          <div className="repo-stat">
            <span>{repo.size.toLocaleString()}KB</span>
          </div>
        </div>
      </Container>
    </a>
  );
};
