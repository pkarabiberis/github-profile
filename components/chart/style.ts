import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10px 25px 0;

  @media (max-width: 768px) {
    margin: 0 0 25px 0;
  }

  .info-card {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 0.25em;
    padding: 10px;

    h2 {
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }
  }
`;
