export type IAuth = {
  user: {
    accessToken: string | null;
    id: string | null;
  };
};

export type IAuthResponse = {
  accessToken: string | null;
};

export type IUser = {
  id: string;
  email?: string;
};
