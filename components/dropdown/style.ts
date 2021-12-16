import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  margin-top: 25px;
  text-align: center;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 32px;
  }

  .dropdown {
    text-align: end;

    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 20px;
    }

    select {
      background-color: transparent;
      color: ${theme.colors.white};
    }

    option {
      background-color: transparent;
      color: ${theme.colors.black};
    }

    label {
      margin-right: 10px;
    }
  }
`;
