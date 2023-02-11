import { apifetch } from "./axios";
import { IListCreator, IReqUser, ListEvent } from "../../interfaces";
import { errorHandle } from "./errorHandle";

type CreateUserResponse = {
  access_token: string;
};

//TODO: ДОДЕЛАТЬ
// interface Api {
//   [key: string]: async ()=>void
// }

export class Api {
  static async loginAccount(val: IReqUser) {
    const user = { username: val.username, password: val.password };
    const resp = await apifetch.post<CreateUserResponse>(`/api/v1/auth/login`, {
      ...user,
    });
    await localStorage.setItem("token", resp.data.access_token);
    const resptwo = await apifetch.get(`api/v1/auth/profile`);
    const data = {
      username: resptwo.data.username,
      session: true,
      userId: resptwo.data.userId,
    };

    return data;
  }

  // @errorHandle()
  static async getListEvent(value: string) {
    const res = await apifetch.get(`api/v1/event`);

    const data = res.data.map((resp: IListCreator) => {
      return {
        id: resp.id,
        userCreatorId: resp.userCreatorId,
        title: resp.title,
        description: resp.description,
        gifts: resp.gifts,
      };
    });

    return data;
  }
}

export const api = {
  loginAccount: async (value: IReqUser) => {
    const user = { username: value.username, password: value.password };
    const resp = await apifetch.post<CreateUserResponse>(`/api/v1/auth/login`, {
      ...user,
    });
    await localStorage.setItem("token", resp.data.access_token);
    const resptwo = await apifetch.get(`api/v1/auth/profile`);
    const data = {
      username: resptwo.data.username,
      session: true,
      userId: resptwo.data.userId,
    };

    return data;
  },
  getAllEvents: async (value: any) => {
    try {
      const resp = await apifetch.get<ListEvent>(`/api/v1/event`);
      return resp.data;
    } catch (error) {
      console.error(error);
    }
  },
  getListEvent: async (value: string) => {
    const res = await await apifetch.get(`api/v1/event`);

    const data = res.data.map((resp: IListCreator) => {
      return {
        id: resp.id,
        userCreatorId: resp.userCreatorId,
        title: resp.title,
        description: resp.description,
        gifts: resp.gifts,
      };
    });

    return data;
  },
};
