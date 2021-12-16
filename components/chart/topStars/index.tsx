import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartConfig } from '../../../types';
import { Container } from '../style';

interface TopStarChartProps {
  chartData: ChartConfig;
}

const TopStarChart: React.FC<TopStarChartProps> = ({ chartData }) => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );

  return (
    <Container>
      {chartData && (
        <div className="info-card">
          <h2>Top Stars</h2>
          <div className="chart">
            <Bar
              width={450}
              height={450}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
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

export default TopStarChart;
