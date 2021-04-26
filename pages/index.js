import { getFeaturedMeetups } from "../dummy_data";
import MeetupsList from "../components/meetups/meetupsList";

const HomePage = () => {
  const featuredMeetups = getFeaturedMeetups();
  return (
    <div>
      <h1>Home Page</h1>
      <MeetupsList meetups={featuredMeetups} />
    </div>
  );
};

export default HomePage;
