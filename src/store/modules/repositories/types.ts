export const REPOSITORIES_REQUEST = "@repositories/REPOSITORIES_REQUEST";
export const REPOSITORIES_REQUEST_SUCCESS = "@repositories/REPOSITORIES_REQUEST_SUCCESS";
export const REPOSITORIES_REQUEST_FAILURE = "@repositories/REPOSITORIES_REQUEST_FAILURE";

export interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export interface RepositoriesState {
  data: Repository[];
  error: boolean;
  loading: boolean;
}
