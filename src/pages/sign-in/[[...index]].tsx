import { SignIn } from "@clerk/nextjs";
import styles from '@/styles/Home.module.css';

export default function Page() {
  return (
    <div className={styles.signin}>
      <SignIn />
    </div>
  )
}