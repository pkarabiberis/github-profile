import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 2rem;
  }

  .dropdown {
    text-align: end;

    @media (${({ theme }) => theme.bp.tabletL}) {
      text-align: center;
      margin-bottom: 1.25rem;
    }

    select {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.white};
    }

    option {
      background-color: transparent;
      color: black;
    }

    label {
      margin-right: 0.6rem;
    }
  }
`;
