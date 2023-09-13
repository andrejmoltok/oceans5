import LoginButton from '../pages/login/login';
import LogoutButton from '../pages/logout/logout';
import { useConvexAuth } from "convex/react";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <>
      {isLoading ? 'Loading...' : isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>
  )
}
