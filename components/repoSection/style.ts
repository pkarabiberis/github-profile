import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin: 1.5rem 0;
  justify-content: space-between;

  @media (${({ theme }) => theme.bp.tabletL}) {
    flex-direction: column;
  }
`;

export const ChartContainer = styled.div`
  flex-direction: column;
  flex: 1;
  max-width: 50%;

  @media (${({ theme }) => theme.bp.tabletL}) {
    min-width: 100%;
  }
`;

export const RepoList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 0.6rem;
  max-width: 50%;

  .load-more {
    margin: 1.2rem auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};

    button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.grey};
      font-size: 0.8rem;
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  @media (${({ theme }) => theme.bp.tabletL}) {
    min-width: 100%;
  }
`;
