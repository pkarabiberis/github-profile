import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
import { ChartConfig } from '../types';

interface LangChartProps {
  chartData: ChartConfig;
}

const Container = styled.div`
  flex: 1;
  align-self: flex-start;
  max-width: 50%;
  margin-right: 10px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
  .info-card {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 0.25em;
    padding: 10px;

    h2 {
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
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
