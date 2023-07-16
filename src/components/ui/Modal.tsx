import { ReactNode } from "react";
import Close from "../../icon/Close";

type IProps = {
  open: boolean;
  control: () => void;
  children: ReactNode;
};

const Modal = ({ open, control, children }: IProps) => {
  return open ? (
    <>
      <div
        onClick={control}
        className="fixed w-full h-full inset-0 z-10 bg-black/50"
      ></div>
      <div className="rounded min-h-[120px] w-[400px] lg:w-[600px] space-y-8 bg-white px-10 pb-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <button
          className="absolute top-2 right-2 bg-gray-50 rounded-sm p-1 text-black hover:bg-gray-100"
          onClick={control}
        >
          <Close />
        </button>
        {children}
      </div>
    </>
  ) : null;
};

export default Modal;
