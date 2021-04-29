import Link from "next/link";
import Navigation from "./navigation";
import styles from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextMeetups</Link>
      </div>
      <Navigation />
    </header>
  );
};

export default MainHeader;
