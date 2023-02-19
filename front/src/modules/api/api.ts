import { apifetch } from "./axios";
import { IListCreator, IReqUser, ListEvent } from "../../interfaces";
import { errorHandle } from "./errorHandle";

type CreateUserResponse = {
  access_token: string;
};

interface IApi {
  [key: string]: (value: any) => Promise<any>;
}

type GetUsersResponse = {
  users_list: [];
};
interface IUserID {
  id: string;
}
interface IEventID {
  id: string;
}
interface IGiftData {
  title: string;
  link: string;
  description: string;
}
interface IData {
  data: {
    title: string;
    description: string;
    isActive: boolean;
  };
}
type GetUsersRequests = {
  data: {};
};

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

export const api: IApi = {
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
  getAllUsers: async (value: IReqUser) => {
    try {
      const resp = await apifetch.get<GetUsersResponse>(`/api/v1/users`);
    } catch (error) {
      console.error(error);
    }
  },

  createUser: async (value: IReqUser) => {
    const data = {
      username: value.username,
      password: value.password,
    };
    const resp = await apifetch.post<CreateUserResponse>(`/api/v1/users`, {
      ...data,
    });
  },

  getUserbyId: async (value: IUserID) => {
    try {
      const id = value.id;
      const resp = await apifetch.get<GetUsersResponse>(`/api/v1/users/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
  updateUser: async (value: IUserID) => {
    try {
      const id = value.id;
      const resp = await apifetch.patch<GetUsersRequests>(
        `/api/v1/users/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  deleteUser: async (value: IUserID) => {
    try {
      const id = value.id;
      const resp = await apifetch.delete<GetUsersResponse>(
        `/api/v1/users/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  registerUser: async (value: IReqUser) => {
    const data = {
      username: value.username,
      password: value.password,
    };
    const resp = await apifetch.post<CreateUserResponse>(`/api/v1/register`, {
      ...data,
    });
  },
  getUserProfile: async (value: any) => {
    try {
      const resp = await apifetch.get<GetUsersResponse>(`/api/v1/auth/profile`);
    } catch (error) {
      console.error(error);
    }
  },
  createEvent: async (value: IData) => {
    try {
      const data = {
        title: value.data.title,
        description: value.data.description,
      };

      const resp = await apifetch.post<CreateUserResponse>(`/api/v1/event`, {
        ...data,
      });
    } catch (error) {
      console.error(error);
    }
  },

  getEventbyId: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.get<GetUsersRequests>(`/api/v1/event/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
  updateEvent: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.patch<GetUsersRequests>(
        `/api/v1/event/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  deleteEvent: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.delete<GetUsersResponse>(
        `/api/v1/event/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  createGift: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.post<GetUsersRequests>(`/api/v1/gift/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
  getAllGifts: async (value: any) => {
    try {
      const resp = await apifetch.get<GetUsersResponse>(`/api/v1/gift`);
    } catch (error) {
      console.error(error);
    }
  },
  getGiftbyId: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.get<GetUsersRequests>(`/api/v1/gift/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
  updateGift: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.patch<GetUsersRequests>(`/api/v1/gift/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
  deleteGift: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.delete<GetUsersResponse>(
        `/api/v1/event/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  bookGift: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.post<GetUsersRequests>(
        `/api/v1/gift/book/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
  unbookGift: async (value: IEventID) => {
    try {
      const id = value.id;
      const resp = await apifetch.delete<GetUsersRequests>(
        `/api/v1/gift/book/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  },
};
