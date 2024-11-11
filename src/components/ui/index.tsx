interface IComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IComponentProps) => (
  <div
    className={`mx-auto w-4/5 rounded-lg bg-background-violet py-[22px] ${className}`}
  >
    {children}
  </div>
);

export const Wrapper = ({ children, className }: IComponentProps) => (
  <div
    className={`flex flex-col text-center drop-shadow-xl ${className}`}
  >
    {children}
  </div>
);

export const H1 = ({ children, className }: IComponentProps) => (
  <h1
    className={`text-4xl font-semibold	text-white ${className}`}
  >
    {children}
  </h1>
);
