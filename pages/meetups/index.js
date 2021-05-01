import { getAllMeetups } from "../../dummy_data";
import MeetupsList from "../../components/meetups/meetupsList";
import MeetupsSearch from "../../components/meetups/meetupsSearch";

const MeetupsPage = () => {
  const meetups = getAllMeetups();
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupsSearch />
      <MeetupsList meetups={meetups} />
    </div>
  );
};

export default MeetupsPage;
