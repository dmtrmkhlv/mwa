export type Require = "protected" | "public";

export type Role = "norequired" | "creator" | "giver";

export interface PageProps {
  isRequire: Require;
}

export interface DataState<T> {
  value: T;
  loading: boolean;
  error: string;
}

interface IUser {
  username: string;
  userId?: number | null;
}
interface IUserId {
  id: number;
}

export interface IUserSession extends IUser {
  session: Boolean;
}

export interface IReqUser extends IUser {
  password: string;
}

export interface IEvent {
  id: number;
  userCreatorId: number;
  date: string;
  title: string;
  description: string;
  givers?: IUserId[];
}
export interface IGiver {
  id: number;
  eventId: number;
  userBookId: number;
  title: string;
  description: string;
  link: string;
}

export interface IEventLink {
  username: "";
  session: false;
  givers?: IUserId[];
}

export interface IGiftCreator {
  username: "";
  session: false;
}

export interface IGiftGiver {
  username: "";
  session: false;
}
export interface IListCreator {
  id: string;
  userCreatorId: string;
  title: string;
  description: string;
  gifts: any[];
}
export interface IListGiver {
  username: "";
  session: false;
}

export interface ListGiftFromEvent {
  id: string;
  eventId: string;
  userCreatorId: string;
  userBookId: string;
  title: string;
  link: string;
  description: string;
}

export interface ListEvent {
  id: string;
  userCreatorId: string;
  dateCreate: string;
  title: string;
  description: string;
  isActive: true;
  gifts: ListGiftFromEvent[];
}
