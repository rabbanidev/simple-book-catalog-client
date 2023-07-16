export type IAuth = {
  user: {
    accessToken: string | null;
  };
};

export type IPayloadAction = {
  accessToken: string;
};
