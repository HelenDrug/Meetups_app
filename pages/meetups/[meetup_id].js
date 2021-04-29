import { useRouter } from "next/router";
import { getMeetupById } from "../../dummy_data";
import MeetupSummary from "../../components/meetupDetails/meetupSummary";
import MeetupLogistics from "../../components/meetupDetails/meetupLogistics";
import MeetupContent from "../../components/meetupDetails/meetupContent";

const MeetupPage = () => {
  const router = useRouter();
  const event = getMeetupById(router.query.meetup_id);
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <MeetupSummary title={event.title} />
      <MeetupLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.name}
      />
      <MeetupContent>
        <p>{event.description}</p>
      </MeetupContent>
    </>
  );
};

export default MeetupPage;
