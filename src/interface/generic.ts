export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type IResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: IMeta;
  data: T;
};
