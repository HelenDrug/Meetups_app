import Link from "next/link";
import styles from "./meetup.module.css";

const Meetup = ({ meetup }) => {
  const date = new Date(meetup.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const address = meetup.location.replace(`,`, `\n`);
  const link = `/events/${meetup.id}`;

  return (
    <li className={styles.item}>
      <img
        src={`/${meetup.image}`}
        alt={meetup.name}
        style={{ width: "500px" }}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{meetup.name}</h2>
          <div className={styles.date}>
            <time>{date}</time>
          </div>
          <div className={styles.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={link}>Explore Meetup</Link>
        </div>
      </div>
    </li>
  );
};

export default Meetup;
