import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ children, link }) => {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
};
export default Button;
