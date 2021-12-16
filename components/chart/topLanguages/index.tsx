import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';
import { ChartConfig } from '../../../types';
import { Container } from '../style';

interface TopLanguagesChartProps {
  chartData: ChartConfig;
}

const TopLanguagesChart: React.FC<TopLanguagesChartProps> = ({ chartData }) => {
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

export default TopLanguagesChart;
