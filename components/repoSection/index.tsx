import React, { useEffect, useState } from 'react';
import { RepoData } from '../../mock';
import { ChartConfig } from '../../types';
import { languageColors } from '../../utils';
import TopLanguagesChart from '../chart/topLanguages';
import TopStarChart from '../chart/topStars';
import DropDown from '../dropdown';
import Repo from '../repo';
import { ChartContainer, Container, RepoList } from './style';

interface RepoSectionProps {
  repos: RepoData[];
}

type sortTypes = 'stargazers_count' | 'forks_count' | 'size';

const RepoSection: React.FC<RepoSectionProps> = ({ repos }) => {
  const [langChartData, setlangChartData] = useState<null | ChartConfig>(null);
  const [starChartData, setstarChartData] = useState<null | ChartConfig>(null);
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

    setlangChartData(config);
  };

  const buildStarChart = () => {
    const labels: string[] = [];
    const labelValues: number[] = [];
    const backgroundColor = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
    ];
    const borderColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];

    const topStarred = [...repos]
      .sort((a, b) => b['stargazers_count'] - a['stargazers_count'])
      .slice(0, 5);

    for (const topStar of topStarred) {
      labels.push(topStar.name);
      labelValues.push(topStar.stargazers_count);
    }

    const config = {
      labels,
      datasets: [
        {
          data: labelValues,
          backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    };

    setstarChartData(config);
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
    buildStarChart();

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
        <ChartContainer>
          {langChartData && <TopLanguagesChart chartData={langChartData} />}
          {starChartData && <TopStarChart chartData={starChartData} />}
        </ChartContainer>

        {isMobile && <DropDown sortRepos={handleSortChange} />}

        <RepoList>
          {sortedRepos.length > 0 &&
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

export default RepoSection;
