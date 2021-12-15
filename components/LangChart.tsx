import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
import { ChartConfig } from '../types';

interface LangChartProps {
  chartData: ChartConfig;
}

const Container = styled.div`
  width: 50%;
  align-self: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
  .info-card {
    box-shadow: 0 2px 2px 0 black;
    border-radius: 0.25em;
    padding: 10px;

    h2 {
      padding: 10px;
    }
  }
`;

export const LangChart: React.FC<LangChartProps> = ({ chartData }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <Container>
      {chartData && (
        <div className="info-card">
          <h2>Languages Used</h2>
          <div className="chart">
            <Pie
              width={450}
              height={450}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      padding: 20,
                    },
                    position: 'bottom',
                    align: 'start',
                  },
                },
              }}
              data={chartData}
            />
          </div>
        </div>
      )}
    </Container>
  );
};
