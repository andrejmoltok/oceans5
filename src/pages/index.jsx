import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { useConvexAuth } from "convex/react";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const router = useRouter();
  return (
    <>
      <><div className={styles.logo}>Oceans5</div></>
    </>
  )
}
