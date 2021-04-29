import classes from "./meetupContent.module.css";

const MeetupContent = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default MeetupContent;
