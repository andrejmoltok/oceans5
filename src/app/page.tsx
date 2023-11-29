import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <Image src="/ship.png" alt="Medieval ship facing right with pink sails" width={200} height={200} priority/>
        <div>Oceans5</div>
      </div>
    </>
  )
}
