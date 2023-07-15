type IProps = {
  message: string;
};

const Error = ({ message }: IProps) => {
  if (!message) return null;
  return <p className="mt-1.5 text-sm font-medium text-red-500">{message}</p>;
};

export default Error;
