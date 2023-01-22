export type Require = "protected" | "public";

export interface PageProps {
  isRequire: Require;
}

export interface DataState<T> {
  value: T;
  loading: boolean;
  error: string;
}

export interface IUser {
  username: string;
  session: Boolean;
}
