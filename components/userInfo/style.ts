import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .avatar {
    margin-bottom: 1.5rem;
    border-radius: 100%;
    width: 9.375rem;
    img {
      border-radius: 100%;
    }
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 0.33rem;
  }

  .commons {
    display: flex;

    span {
      margin-right: 1.2rem;
      color: ${({ theme }) => theme.colors.grey};
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.25rem;
      }

      @media (${({ theme }) => theme.bp.tabletL}) {
        margin: 0 0 0.25rem 0;
      }
    }

    @media (${({ theme }) => theme.bp.tabletL}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .user-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(75px, 150px));
    column-gap: 1rem;

    .stat-item {
      margin: 1.875rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
      border-radius: 0.25rem;

      span {
        font-size: 1.5rem;
        font-weight: 700;
        @media (${({ theme }) => theme.bp.tabletS}) {
          font-size: 1rem;
        }

        &:last-child {
          font-weight: 400;
          margin-top: 0.3125rem;
          color: ${({ theme }) => theme.colors.grey};
          font-size: 1rem;
          @media (${({ theme }) => theme.bp.tabletS}) {
            font-size: 0.625rem;
          }
        }
      }
    }
  }
`;
