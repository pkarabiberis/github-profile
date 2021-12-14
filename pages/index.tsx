import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserInfo } from '../components/UserInfo';
import { UserRepos } from '../components/UserRepos';
import { mockUser, User, RepoData, mockRepo } from '../mock';

const Main = styled.main`
  padding: 50px 25px;
  margin: 0 auto;
  max-width: 1200px;
`;

export default function Home() {
  const [user, setUser] = useState<null | User>(null);
  const [repos, setRepos] = useState<RepoData[] | null>(null);

  useEffect(() => {
    // fetch('https://api.github.com/users/pkarabiberis')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => console.log(json));
    setUser(mockUser);
    setRepos(mockRepo);
  }, []);

  return (
    <Main>
      {user && <UserInfo user={user} />}
      {repos && <UserRepos repos={repos} />}
    </Main>
  );
}
