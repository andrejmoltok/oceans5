import styles from '@/styles/Panel.module.css';

export default function Panel() {
    return (
    <>
        <div className={styles.container}>
            <div className={styles.panel}>Player Grid</div>
            <div className={styles.panel}>Opponent Grid</div>
        </div>
        {/*TODO collapsible sidebar*/}
        {/* <div className={styles.sidebar}>Sidebar</div> */}
    </>
    )
}