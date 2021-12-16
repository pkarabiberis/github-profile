import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }

  .avatar {
    margin-bottom: 1.5rem;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  .commons {
    display: flex;

    span {
      margin-right: 1.2rem;
      color: ${theme.colors.grey};
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.25rem;
      }

      @media (max-width: 600px) {
        margin: 0 0 0.25rem 0;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .user-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(75px, 150px));
    gap: 15px;

    .stat-item {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid ${theme.colors.borderColor};
      border-radius: 0.25em;

      span {
        font-size: 24px;
        font-weight: 700;
        @media (max-width: 600px) {
          font-size: 16px;
        }

        &:last-child {
          font-weight: 400;
          margin-top: 5px;
          color: ${theme.colors.grey};
          font-size: 16px;
          @media (max-width: 600px) {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
