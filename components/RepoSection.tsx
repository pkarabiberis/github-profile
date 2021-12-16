import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepoData } from '../mock';
import theme from '../styles/theme';
import { ChartConfig } from '../types';
import { languageColors } from '../utils';
import { DropDown } from './DropDown';
import { LangChart } from './LangChart';
import { Repo } from './Repo';

interface RepoSectionProps {
  repos: RepoData[];
}

type sortTypes = 'stargazers_count' | 'forks_count' | 'size';

const Container = styled.section`
  display: flex;
  margin: 25px 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RepoList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;
  max-width: 50%;

  .load-more {
    margin: 25px auto;
    text-align: center;
    font-size: 13px;
    color: ${theme.colors.grey};

    button {
      background-color: transparent;
      color: ${theme.colors.grey};

      &:hover {
        color: ${theme.colors.blue};
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const RepoSection: React.FC<RepoSectionProps> = ({ repos }) => {
  const [chartData, setChartData] = useState<null | ChartConfig>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [sortType, setSortType] = useState<sortTypes>('stargazers_count');
  const [sortedRepos, setSortedRepos] = useState<RepoData[]>([]);
  const [cursorIndex, setCursorIndex] = useState(4);

  const getLanguages = () => {
    const languageMap: Record<string, number> = {};

    for (const repo of repos) {
      if (repo.language) {
        if (!languageMap[repo.language]) {
          languageMap[repo.language] = 1;
        } else {
          languageMap[repo.language]++;
        }
      }
    }

    return languageMap;
  };

  const buildLanguageChart = () => {
    const languages = getLanguages();
    const labels: string[] = [];
    const labelValues: number[] = [];
    const backgroundColor: string[] = [];

    Object.keys(languages).forEach((lang) => {
      labels.push(lang);
      labelValues.push(languages[lang]);
      const langToType = lang as keyof typeof languageColors;
      backgroundColor.push(languageColors[langToType].color || '');
    });

    const config = {
      labels,
      datasets: [
        {
          data: labelValues,
          backgroundColor,
          borderColor: backgroundColor,
          borderWidth: 1,
        },
      ],
    };

    setChartData(config);
  };

  const sortMap: Record<string, string> = {
    stars: 'stargazers_count',
    forks: 'forks_count',
    size: 'size',
  };

  const handleSortChange = (value: string) => {
    const type = sortMap[value] as sortTypes;
    setSortType(type);
  };

  const sortRepos = () => {
    const sorted = [...repos]
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortType] - a[sortType])
      .slice(0, cursorIndex);

    setSortedRepos(sorted);
  };

  const handleLoadMore = () => {
    setCursorIndex((prev) => prev + 4);
  };

  useEffect(() => {
    buildLanguageChart();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    sortRepos();
  }, [sortType, cursorIndex]);

  return (
    <>
      {!isMobile && <DropDown sortRepos={handleSortChange} />}
      <Container>
        {chartData && <LangChart chartData={chartData} />}
        {isMobile && <DropDown sortRepos={handleSortChange} />}

        <RepoList>
          {sortedRepos &&
            sortedRepos.map((repo) => <Repo key={repo.id} repo={repo} />)}
          <div className="load-more">
            {repos[cursorIndex + 1] ? (
              <button onClick={handleLoadMore}>Show more</button>
            ) : (
              <span>You've reached the end!</span>
            )}
          </div>
        </RepoList>
      </Container>
    </>
  );
};
