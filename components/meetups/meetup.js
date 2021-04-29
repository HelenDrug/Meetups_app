import styles from "./meetup.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";

const Meetup = ({ meetup }) => {
  const date = new Date(meetup.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const address = meetup.location.replace(`,`, `\n`);
  const link = `/meetups/${meetup.id}`;

  return (
    <li className={styles.item}>
      <img src={`/${meetup.image}`} alt={meetup.name} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{meetup.name}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={link}>
            <span>Explore Meetup</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Meetup;
