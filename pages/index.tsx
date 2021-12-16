import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RepoSection from '../components/repoSection';
import UserInfo from '../components/userInfo';
import { mockRepo, mockUser, RepoData, User } from '../mock';

const Main = styled.main`
  padding: 50px 25px;
  margin: 0 auto;
  max-width: 1200px;
`;

export default function Home() {
  const [user, setUser] = useState<null | User>(null);
  const [repos, setRepos] = useState<RepoData[] | null>(null);

  useEffect(() => {
    // fetch('https://api.github.com/users/skydoves')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setUser(json as User))
    //   .then(() => {
    //     fetch('https://api.github.com/users/skydoves/repos')
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((json) => setRepos(json as RepoData[]));
    //   });
    setUser(mockUser);
    setRepos(mockRepo);
  }, []);

  return (
    <Main>
      {user && <UserInfo user={user} />}
      {repos && <RepoSection repos={repos} />}
    </Main>
  );
}
