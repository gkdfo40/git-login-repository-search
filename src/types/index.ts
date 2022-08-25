// export interface RepositoryData {
//   data: Data;
// }

interface KNode {
  name: string;
}

interface KSearch {
  nodes: KNode[];
}

export interface KeyWordData {
  search: KSearch;
}

export interface PageInfo {
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
}

export interface Owner {
  login: string;
  avatarUrl: string;
}

export interface Node {
  id: string;
  name: string;
  url: string;
  owner: Owner;
  stargazerCount: number;
  updatedAt: Date;
}

export interface Search {
  repositoryCount: number;
  pageInfo: PageInfo;
  nodes: Node[];
}

export interface RepositoryData {
  search: Search;
}
