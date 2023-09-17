import styles from '@/styles/Home.module.css';
import Lobby from './components/lobby';
import { useConvexAuth } from "convex/react";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <>
      {isAuthenticated ? <Lobby /> : <><div className={styles.logo}>Oceans5</div></>}
    </>
  )
}
