import React, { useEffect, useState } from 'react';
import { RepoData } from '../mock';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

interface UserReposProps {
  repos: RepoData[];
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const UserRepos: React.FC<UserReposProps> = ({ repos }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [langData, setLangData] = useState<any>(null);

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
    const chartData: number[] = [];
    Object.keys(getLanguages()).forEach((lang) => {
      labels.push(lang);
      chartData.push(languages[lang]);
    });

    const config = {
      labels,
      datasets: [
        {
          label: 'Languages',
          data: chartData,
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

    setLangData(config);
  };

  useEffect(() => {
    console.log('run');
    buildLanguageChart();
  }, []);

  return (
    <Container>
      {langData && (
        <div className="chart">
          <Pie
            width={300}
            height={300}
            options={{ maintainAspectRatio: false }}
            data={langData}
          />
        </div>
      )}
      {langData && (
        <div className="chart">
          <Pie
            width={300}
            height={300}
            options={{ maintainAspectRatio: false, responsive: true }}
            data={langData}
          />
        </div>
      )}
      {langData && (
        <div className="chart">
          <Pie
            width={300}
            height={300}
            options={{ maintainAspectRatio: false, responsive: true }}
            data={langData}
          />
        </div>
      )}
    </Container>
  );
};
