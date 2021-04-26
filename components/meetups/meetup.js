import Link from "next/link";

const Meetup = ({ meetup }) => {
  const date = new Date(meetup.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const address = meetup.location.replace(`,`, `\n`);
  const link = `/events/${meetup.id}`;

  return (
    <li>
      <img
        src={`/${meetup.image}`}
        alt={meetup.name}
        style={{ width: "500px" }}
      />
      <div>
        <div>
          <h2>{meetup.name}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={link}>Explore Meetup</Link>
        </div>
      </div>
    </li>
  );
};

export default Meetup;
