import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RepoSection from '../components/repoSection';
import UserInfo from '../components/userInfo';
import { mockRepo, mockUser, RepoData, User } from '../mock';
import Head from '../components/Head';
import Spinner from '../components/spinner';

const Main = styled.main`
  padding: 3rem 1.5rem;
  margin: 0 auto;
  max-width: 75rem;
`;

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  p {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export default function Profile() {
  const { query } = useRouter();
  const [user, setUser] = useState<null | User>(null);
  const [repos, setRepos] = useState<RepoData[] | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.user) {
      setLoading(true);
      fetch(`https://api.github.com/users/${query.user}`)
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            return setError('Something went wrong.');
          }
          return res.json();
        })
        .catch((err) => {
          setLoading(false);
          return setError('Something went wrong.');
        })
        .then((json) => setUser(json as User))
        .then(() => {
          fetch(`https://api.github.com/users/${query.user}/repos`)
            .then((res) => {
              if (!res.ok) {
                setLoading(false);
                return setError('Something went wrong.');
              }
              return res.json();
            })
            .then((json) => {
              setLoading(false);
              setRepos(json as RepoData[]);
            });
        })
        .catch((err) => {
          setLoading(false);
          return setError('Something went wrong.');
        });
    }

    // setUser(mockUser);
    // setRepos(mockRepo);
  }, [query]);

  return (
    <>
      <Head
        title={user?.name ? `Github Profile | ${user?.name}` : 'Github Profile'}
      />
      {error ? (
        <StyledError>
          <p>{error}</p>
        </StyledError>
      ) : (
        <Main>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {user && <UserInfo user={user} />}
              {repos && <RepoSection repos={repos} />}
            </>
          )}
        </Main>
      )}
    </>
  );
}
