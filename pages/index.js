import { getFeaturedMeetups } from "../dummy_data";
import MeetupsList from "../components/meetups/meetupsList";

const HomePage = () => {
  const featuredMeetups = getFeaturedMeetups();
  return (
    <div>
      <MeetupsList meetups={featuredMeetups} />
    </div>
  );
};

export default HomePage;
