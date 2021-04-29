import classes from "./meetupSummary.module.css";

const MeetupSummary = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default MeetupSummary;
