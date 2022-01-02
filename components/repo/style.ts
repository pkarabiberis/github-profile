import styled from 'styled-components';

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
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};

  .repo-head {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 1.25rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      margin-right: 0.6rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
  }

  .repo-footer {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.grey};
    @media (${({ theme }) => theme.bp.mobileM}) {
      flex-wrap: wrap;
    }
  }

  .repo-stat {
    display: flex;
    align-items: center;
    margin: 0 0.6rem 0.6rem 0;
    font-size: 0.8rem;

    &:first-child::before {
      content: '';
      padding: 0.3rem;
      margin-right: 0.3rem;
      border-radius: 100%;
      background-color: ${({ color, theme }) =>
        color ? color : theme.colors.grey};
    }

    &:last-child {
      margin-left: auto;

      @media (${({ theme }) => theme.bp.mobileM}) {
        flex-wrap: wrap;
        margin: 0 0 0.6rem 0;
      }
    }
    svg {
      margin-right: 0.2rem;
    }
  }
`;
