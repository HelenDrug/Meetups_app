import Meetup from "./meetup";

const MeetupsList = ({ meetups }) => {
  return (
    <ul>
      {meetups.map((meetup) => {
        return <Meetup key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
};
export default MeetupsList;
