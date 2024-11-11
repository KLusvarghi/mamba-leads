import classNames from "classnames";
import { IChildrenProps } from "../../types/auxProps";

interface IButtonProps extends IChildrenProps {
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-lg bg-v03 p-2 px-5 py-2 text-white transition delay-100 ease-in-out hover:bg-v01",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
