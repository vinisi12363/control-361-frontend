import type { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="@container">{children}</div>;
};

export default MainContainer;
