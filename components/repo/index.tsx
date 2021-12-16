import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import React from 'react';
import { RepoData } from '../../mock';
import { languageColors } from '../../utils';
import { Container } from './style';

interface RepoProps {
  repo: RepoData;
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const color =
    (repo.language &&
      languageColors[repo.language as keyof typeof languageColors].color) ||
    '';

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <Container color={color}>
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

export default Repo;
