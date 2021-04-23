const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpeg",
    isFeatured: false,
  },
  {
    id: "m2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpeg",
    isFeatured: true,
  },
  {
    id: "m3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpeg",
    isFeatured: true,
  },
];

export function getFeaturedMeetups() {
  return DUMMY_MEETUPS.filter((meetup) => meetup.isFeatured);
}

export function getAllMeetups() {
  return DUMMY_MEETUPS;
}

export function getFilteredMeetups(dateFilter) {
  const { year, month } = dateFilter;

  let filteredMeetups = DUMMY_MEETUPS.filter((meetup) => {
    const meetupDate = new Date(meetup.date);
    return (
      meetupDate.getFullYear() === year && meetupDate.getMonth() === month - 1
    );
  });

  return filteredMeetups;
}

export function getmeetupById(id) {
  return DUMMY_MEETUPS.find((meetup) => meetup.id === id);
}
