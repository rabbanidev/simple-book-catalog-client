/* eslint-disable @typescript-eslint/no-explicit-any */
const errorHandler = (error: any) => {
  let message = "";
  if (error?.data) {
    message = error.data?.message;
  } else {
    message = error?.error;
  }
  return message;
};

export default errorHandler;
