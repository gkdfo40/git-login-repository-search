export interface PageInfo {
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
}

export interface Owner {
  id: string;
  __typename: string;
}

export interface Node {
  id: string;
  owner: Owner;
  name: string;
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

// export interface RepositoryData {
//   data: Data;
// }
