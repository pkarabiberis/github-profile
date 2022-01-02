import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0.6rem 1.25rem 0;

  @media (${({ theme }) => theme.bp.tabletL}) {
    margin: 0 0 1.25rem 0;
  }

  .info-card {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 0.25em;
    padding: 0.6rem;

    h2 {
      padding: 0.6rem;
      font-size: 1.25rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;
