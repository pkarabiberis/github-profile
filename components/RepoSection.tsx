import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepoData } from '../mock';
import { ChartConfig } from '../types';
import { DropDown } from './DropDown';
import { LangChart } from './LangChart';
import { Repo } from './Repo';

interface RepoSectionProps {
  repos: RepoData[];
}

const Container = styled.section`
  display: flex;
  margin: 25px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RepoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const RepoSection: React.FC<RepoSectionProps> = ({ repos }) => {
  const [chartData, setChartData] = useState<null | ChartConfig>(null);
  const [isMobile, setIsMobile] = useState<null | boolean>(null);
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

    Object.keys(getLanguages()).forEach((lang) => {
      labels.push(lang);
      labelValues.push(languages[lang]);
    });

    const config = {
      labels,
      datasets: [
        {
          data: labelValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    setChartData(config);
  };

  useEffect(() => {
    buildLanguageChart();
    const updateWidth = () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    };

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <>
      {!isMobile && <DropDown />}

      <Container>
        {chartData && <LangChart chartData={chartData} />}

        {isMobile && <DropDown />}
        <RepoList>
          {repos &&
            repos.map((repo) => (
              <Repo
                key={repo.id}
                name={repo.name}
                desc={repo.description || ''}
                forks={repo.forks_count}
                language={repo.language || ''}
                size={repo.size}
                stars={repo.stargazers_count}
              />
            ))}
        </RepoList>
      </Container>
    </>
  );
};
