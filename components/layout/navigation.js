import Link from "next/link";
import styles from "./mainHeader.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/meetups">Browse all Meetups</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
