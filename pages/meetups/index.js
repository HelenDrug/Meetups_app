import { getAllMeetups } from "../../dummy_data";
import MeetupsList from "../../components/meetups/meetupsList";

const MeetupsPage = () => {
  const meetups = getAllMeetups();
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupsList meetups={meetups} />
      )}
    </div>
  );
};

export default MeetupsPage;
