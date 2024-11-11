import { IChildrenProps } from "../../types/auxProps";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IModalProps extends IChildrenProps {
  onClose: () => void;
}

const Modal = ({ children, onClose }: IModalProps) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative rounded-lg bg-v02 p-4 shadow-lg">
      <XMarkIcon
        onClick={onClose}
        className="absolute right-3 size-8 z-10 cursor-pointer text-black"
      />
      {children}
    </div>
  </div>
);

export default Modal;
