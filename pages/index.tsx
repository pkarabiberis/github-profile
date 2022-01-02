import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Head from '../components/Head';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  form {
    padding: 0.6rem;
    max-width: 500px;
  }

  label {
    display: block;
    font-size: 2.5rem;
    margin: 1rem;
    font-weight: 600;
  }

  input {
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
    border-radius: 0.25rem;
    padding: 1rem;
    font-size: 2rem;

    width: 100%;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function Index() {
  const [user, setUser] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const router = useRouter();

  return (
    <Container>
      <Head />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push({
            pathname: '/profile',
            query: { user },
          });
        }}
      >
        <label htmlFor="user">Enter a Github user</label>
        <input onChange={handleChange} type="text" name="user" />
      </form>
    </Container>
  );
}
