import React from 'react';
import styled from 'styled-components';
import { User } from '../mock';
import theme from '../styles/theme';
import { LocationIcon, CalendarIcon } from '@primer/octicons-react';

interface UserInfoProps {
  user: User;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    margin-bottom: 1.5rem;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  .commons {
    display: flex;

    span {
      margin-right: 1.2rem;
      color: ${theme.colors.grey};
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.25rem;
      }

      @media (max-width: 600px) {
        margin: 0 0 0.25rem 0;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .user-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(75px, 150px));
    gap: 15px;

    .stat-item {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid ${theme.colors.borderColor};
      border-radius: 0.25em;

      span {
        font-size: 24px;
        font-weight: 700;
        @media (max-width: 600px) {
          font-size: 16px;
        }

        &:last-child {
          font-weight: 400;
          margin-top: 5px;
          color: ${theme.colors.grey};
          font-size: 16px;
          @media (max-width: 600px) {
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
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
            <CalendarIcon verticalAlign="middle" />{' '}
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
