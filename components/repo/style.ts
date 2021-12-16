import styled from 'styled-components';
import theme from '../../styles/theme';

interface LangColor {
  color: string;
}

export const Container = styled.li<LangColor>`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0.25em;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 20px;
  font-size: 14px;
  color: ${theme.colors.white};

  .repo-head {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      margin-right: 10px;
    }
  }

  p {
    color: ${theme.colors.grey};
  }

  .repo-footer {
    display: flex;
    align-items: center;
    color: ${theme.colors.grey};

    @media (max-width: 400px) {
      flex-wrap: wrap;
    }
  }

  .repo-stat {
    display: flex;
    align-items: center;
    margin: 0 10px 10px 0;
    font-size: 13px;

    &:first-child::before {
      content: '';
      padding: 5px;
      margin-right: 5px;
      border-radius: 100%;
      background-color: ${({ color }) => (color ? color : 'gray')};
    }

    &:last-child {
      margin-left: auto;

      @media (max-width: 400px) {
        flex-wrap: wrap;
        margin: 0 0 10px 0;
      }
    }
    svg {
      margin-right: 2px;
    }
  }
`;
