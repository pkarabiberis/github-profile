import React from 'react';
import { User } from '../../mock';
import { LocationIcon, CalendarIcon } from '@primer/octicons-react';
import { Container } from './style';

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  console.log(user);
  return (
    <Container>
      {user.avatar_url && (
        <div className="avatar">
          <img src={user?.avatar_url} alt="User Avatar" />
        </div>
      )}

      {user.name && <h1>{user.name}</h1>}

      {user.login && (
        <h2>
          <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
            @{user?.login}
          </a>
        </h2>
      )}

      <div className="commons">
        {user?.location && (
          <span>
            <LocationIcon verticalAlign="middle" /> {user.location}
          </span>
        )}

        {user?.created_at && (
          <span>
            <CalendarIcon verticalAlign="middle" /> Joined{' '}
            {new Date(user?.created_at!).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        )}

        {user?.company && <span>{user.company}</span>}
      </div>

      <div className="user-stats">
        <div className="stat-item">
          <span>{user?.public_repos}</span>
          <span>repositories</span>
        </div>

        <div className="stat-item">
          <span>{user?.followers}</span>
          <span>followers</span>
        </div>

        <div className="stat-item">
          <span>{user?.following}</span>
          <span>following</span>
        </div>
      </div>
    </Container>
  );
};

export default UserInfo;
