import Meetup from "./meetup";
import styles from "./meetupsList.module.css";

const MeetupsList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => {
        return <Meetup key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
};
export default MeetupsList;
