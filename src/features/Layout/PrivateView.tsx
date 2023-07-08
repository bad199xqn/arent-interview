import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "../LoginModal";

export function PrivateView({ children }: { children: ReactElement }) {
  const { user: authUser } = useSelector((storeState: any) => storeState.auth);

  if (!authUser) {
    return (
      <>
        {children}
        <LoginModal />
      </>
    );
  }
  return children;
}
