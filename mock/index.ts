export const mockUser: User = {
  avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
  bio: null,
  blog: 'https://pavloskarabiberis.com',
  company: null,
  created_at: '2020-02-28T08:05:59Z',
  email: null,
  events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
  followers: 0,
  followers_url: 'https://api.github.com/users/pkarabiberis/followers',
  following: 0,
  following_url:
    'https://api.github.com/users/pkarabiberis/following{/other_user}',
  gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
  gravatar_id: '',
  hireable: null,
  html_url: 'https://github.com/pkarabiberis',
  id: 61578516,
  location: 'Rovaniemi, Finland',
  login: 'pkarabiberis',
  name: 'Pavlos Karabiberis',
  node_id: 'MDQ6VXNlcjYxNTc4NTE2',
  organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
  public_gists: 0,
  public_repos: 11,
  received_events_url:
    'https://api.github.com/users/pkarabiberis/received_events',
  repos_url: 'https://api.github.com/users/pkarabiberis/repos',
  site_admin: false,
  starred_url:
    'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/pkarabiberis/subscriptions',
  twitter_username: null,
  type: 'User',
  updated_at: '2021-11-23T16:45:53Z',
  url: 'https://api.github.com/users/pkarabiberis',
};

export interface User {
  avatar_url: string;
  bio: null;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}

export interface RepoData {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null | {};
  allow_forking: boolean;
  is_template: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export const mockRepo: RepoData[] = [
  {
    id: 302301218,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMDIzMDEyMTg=',
    name: 'Inner_Path',
    full_name: 'pkarabiberis/Inner_Path',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/Inner_Path',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/Inner_Path',
    forks_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/Inner_Path/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/Inner_Path/deployments',
    created_at: '2020-10-08T10:09:00Z',
    updated_at: '2020-10-08T10:31:12Z',
    pushed_at: '2020-10-08T10:31:09Z',
    git_url: 'git://github.com/pkarabiberis/Inner_Path.git',
    ssh_url: 'git@github.com:pkarabiberis/Inner_Path.git',
    clone_url: 'https://github.com/pkarabiberis/Inner_Path.git',
    svn_url: 'https://github.com/pkarabiberis/Inner_Path',
    homepage: null,
    size: 1128296,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 383042297,
    node_id: 'MDEwOlJlcG9zaXRvcnkzODMwNDIyOTc=',
    name: 'issuetracker',
    full_name: 'pkarabiberis/issuetracker',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/issuetracker',
    description:
      'An issue tracker application where users can make projects and issues',
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/issuetracker',
    forks_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/issuetracker/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/issuetracker/deployments',
    created_at: '2021-07-05T06:49:12Z',
    updated_at: '2021-11-23T16:07:15Z',
    pushed_at: '2021-11-23T16:07:12Z',
    git_url: 'git://github.com/pkarabiberis/issuetracker.git',
    ssh_url: 'git@github.com:pkarabiberis/issuetracker.git',
    clone_url: 'https://github.com/pkarabiberis/issuetracker.git',
    svn_url: 'https://github.com/pkarabiberis/issuetracker',
    homepage: 'https://issuetracker.karabiberisapps.com',
    size: 638,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 404366615,
    node_id: 'MDEwOlJlcG9zaXRvcnk0MDQzNjY2MTU=',
    name: 'lireddit',
    full_name: 'pkarabiberis/lireddit',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/lireddit',
    description: null,
    fork: true,
    url: 'https://api.github.com/repos/pkarabiberis/lireddit',
    forks_url: 'https://api.github.com/repos/pkarabiberis/lireddit/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/lireddit/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/lireddit/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/lireddit/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/lireddit/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/lireddit/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/lireddit/deployments',
    created_at: '2021-09-08T13:53:38Z',
    updated_at: '2021-09-08T13:53:39Z',
    pushed_at: '2021-04-21T15:41:14Z',
    git_url: 'git://github.com/pkarabiberis/lireddit.git',
    ssh_url: 'git@github.com:pkarabiberis/lireddit.git',
    clone_url: 'https://github.com/pkarabiberis/lireddit.git',
    svn_url: 'https://github.com/pkarabiberis/lireddit',
    homepage: 'https://youtu.be/I6ypD7qv3Z8',
    size: 341,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 302294944,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMDIyOTQ5NDQ=',
    name: 'Mayhem-2020',
    full_name: 'pkarabiberis/Mayhem-2020',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/Mayhem-2020',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020',
    forks_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/Mayhem-2020/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/Mayhem-2020/deployments',
    created_at: '2020-10-08T09:40:52Z',
    updated_at: '2020-10-08T10:04:19Z',
    pushed_at: '2020-10-08T10:04:17Z',
    git_url: 'git://github.com/pkarabiberis/Mayhem-2020.git',
    ssh_url: 'git@github.com:pkarabiberis/Mayhem-2020.git',
    clone_url: 'https://github.com/pkarabiberis/Mayhem-2020.git',
    svn_url: 'https://github.com/pkarabiberis/Mayhem-2020',
    homepage: null,
    size: 2390,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Kotlin',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 263936276,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNjM5MzYyNzY=',
    name: 'my-spotify',
    full_name: 'pkarabiberis/my-spotify',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/my-spotify',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/my-spotify',
    forks_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/my-spotify/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify/deployments',
    created_at: '2020-05-14T14:22:06Z',
    updated_at: '2020-05-20T13:16:44Z',
    pushed_at: '2021-10-06T17:05:32Z',
    git_url: 'git://github.com/pkarabiberis/my-spotify.git',
    ssh_url: 'git@github.com:pkarabiberis/my-spotify.git',
    clone_url: 'https://github.com/pkarabiberis/my-spotify.git',
    svn_url: 'https://github.com/pkarabiberis/my-spotify',
    homepage: null,
    size: 2041,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 18,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 18,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 398855874,
    node_id: 'MDEwOlJlcG9zaXRvcnkzOTg4NTU4NzQ=',
    name: 'my-spotify-react',
    full_name: 'pkarabiberis/my-spotify-react',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/my-spotify-react',
    description: 'A web application that shows your Spotify data.',
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/my-spotify-react',
    forks_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/teams',
    hooks_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/my-spotify-react/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/my-spotify-react/deployments',
    created_at: '2021-08-22T17:12:46Z',
    updated_at: '2021-11-23T16:24:06Z',
    pushed_at: '2021-11-23T16:24:03Z',
    git_url: 'git://github.com/pkarabiberis/my-spotify-react.git',
    ssh_url: 'git@github.com:pkarabiberis/my-spotify-react.git',
    clone_url: 'https://github.com/pkarabiberis/my-spotify-react.git',
    svn_url: 'https://github.com/pkarabiberis/my-spotify-react',
    homepage: 'https://my-spotify.karabiberisapps.com',
    size: 650,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: ['react', 'spotify-web-api', 'styled-components', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 413081402,
    node_id: 'R_kgDOGJ8fOg',
    name: 'personalsite',
    full_name: 'pkarabiberis/personalsite',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/personalsite',
    description: 'Personal website built with Gatsby',
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/personalsite',
    forks_url: 'https://api.github.com/repos/pkarabiberis/personalsite/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/personalsite/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/personalsite/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/issues/events{/number}',
    events_url: 'https://api.github.com/repos/pkarabiberis/personalsite/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/personalsite/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/pkarabiberis/personalsite/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/personalsite/deployments',
    created_at: '2021-10-03T13:11:15Z',
    updated_at: '2021-11-28T11:06:36Z',
    pushed_at: '2021-11-28T11:06:33Z',
    git_url: 'git://github.com/pkarabiberis/personalsite.git',
    ssh_url: 'git@github.com:pkarabiberis/personalsite.git',
    clone_url: 'https://github.com/pkarabiberis/personalsite.git',
    svn_url: 'https://github.com/pkarabiberis/personalsite',
    homepage: 'https://pavloskarabiberis.com',
    size: 6765,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: ['gatsby', 'personal-website', 'styled-components'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 244858934,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDQ4NTg5MzQ=',
    name: 'quizapp-react',
    full_name: 'pkarabiberis/quizapp-react',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/quizapp-react',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/quizapp-react',
    forks_url: 'https://api.github.com/repos/pkarabiberis/quizapp-react/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/pkarabiberis/quizapp-react/teams',
    hooks_url: 'https://api.github.com/repos/pkarabiberis/quizapp-react/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/quizapp-react/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/quizapp-react/deployments',
    created_at: '2020-03-04T09:29:11Z',
    updated_at: '2020-03-12T16:46:30Z',
    pushed_at: '2020-03-12T16:46:28Z',
    git_url: 'git://github.com/pkarabiberis/quizapp-react.git',
    ssh_url: 'git@github.com:pkarabiberis/quizapp-react.git',
    clone_url: 'https://github.com/pkarabiberis/quizapp-react.git',
    svn_url: 'https://github.com/pkarabiberis/quizapp-react',
    homepage: null,
    size: 720,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 370672510,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNzA2NzI1MTA=',
    name: 'rolloAppTemplate',
    full_name: 'pkarabiberis/rolloAppTemplate',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/rolloAppTemplate',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/rolloAppTemplate',
    forks_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/teams',
    hooks_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/branches{/branch}',
    tags_url: 'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/rolloAppTemplate/deployments',
    created_at: '2021-05-25T11:42:20Z',
    updated_at: '2021-05-25T11:47:35Z',
    pushed_at: '2021-06-21T10:54:50Z',
    git_url: 'git://github.com/pkarabiberis/rolloAppTemplate.git',
    ssh_url: 'git@github.com:pkarabiberis/rolloAppTemplate.git',
    clone_url: 'https://github.com/pkarabiberis/rolloAppTemplate.git',
    svn_url: 'https://github.com/pkarabiberis/rolloAppTemplate',
    homepage: null,
    size: 186,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Kotlin',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 430474449,
    node_id: 'R_kgDOGaiE0Q',
    name: 'scroogesbtctracker',
    full_name: 'pkarabiberis/scroogesbtctracker',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/scroogesbtctracker',
    description: 'Rising Star pre-assignment',
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/scroogesbtctracker',
    forks_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/teams',
    hooks_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/scroogesbtctracker/deployments',
    created_at: '2021-11-21T20:37:34Z',
    updated_at: '2021-12-11T13:29:56Z',
    pushed_at: '2021-12-11T13:29:54Z',
    git_url: 'git://github.com/pkarabiberis/scroogesbtctracker.git',
    ssh_url: 'git@github.com:pkarabiberis/scroogesbtctracker.git',
    clone_url: 'https://github.com/pkarabiberis/scroogesbtctracker.git',
    svn_url: 'https://github.com/pkarabiberis/scroogesbtctracker',
    homepage: 'https://bitcointracker.karabiberisapps.com',
    size: 265,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: ['react', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 363658331,
    node_id: 'MDEwOlJlcG9zaXRvcnkzNjM2NTgzMzE=',
    name: 'semesterproject2021',
    full_name: 'pkarabiberis/semesterproject2021',
    private: false,
    owner: {
      login: 'pkarabiberis',
      id: 61578516,
      node_id: 'MDQ6VXNlcjYxNTc4NTE2',
      avatar_url: 'https://avatars.githubusercontent.com/u/61578516?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pkarabiberis',
      html_url: 'https://github.com/pkarabiberis',
      followers_url: 'https://api.github.com/users/pkarabiberis/followers',
      following_url:
        'https://api.github.com/users/pkarabiberis/following{/other_user}',
      gists_url: 'https://api.github.com/users/pkarabiberis/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/pkarabiberis/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/pkarabiberis/subscriptions',
      organizations_url: 'https://api.github.com/users/pkarabiberis/orgs',
      repos_url: 'https://api.github.com/users/pkarabiberis/repos',
      events_url: 'https://api.github.com/users/pkarabiberis/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/pkarabiberis/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/pkarabiberis/semesterproject2021',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/pkarabiberis/semesterproject2021',
    forks_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/forks',
    keys_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/teams',
    hooks_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/hooks',
    issue_events_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/events',
    assignees_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/tags',
    blobs_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/languages',
    stargazers_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/stargazers',
    contributors_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/contributors',
    subscribers_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/subscribers',
    subscription_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/subscription',
    commits_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/merges',
    archive_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/downloads',
    issues_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/labels{/name}',
    releases_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/pkarabiberis/semesterproject2021/deployments',
    created_at: '2021-05-02T13:31:48Z',
    updated_at: '2021-05-02T13:32:42Z',
    pushed_at: '2021-05-02T13:32:40Z',
    git_url: 'git://github.com/pkarabiberis/semesterproject2021.git',
    ssh_url: 'git@github.com:pkarabiberis/semesterproject2021.git',
    clone_url: 'https://github.com/pkarabiberis/semesterproject2021.git',
    svn_url: 'https://github.com/pkarabiberis/semesterproject2021',
    homepage: null,
    size: 467,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Kotlin',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
];
