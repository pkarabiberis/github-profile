import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  margin: 25px 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ChartContainer = styled.div`
  flex-direction: column;
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const RepoList = styled.ul`
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
