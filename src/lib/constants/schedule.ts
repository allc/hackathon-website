export type Event = {
  id: string;
  day: string;
  start: string;
  end?: string;
  title: string;
  location?: string;
  description?: string;
};

export const hackathonEvents: Event[] = [
  {
    id: "registration",
    day: "2026-03-20",
    start: "13:00",
    end: "14:00",
    title: "Registration",
    location: "@NUCLEUS_FOYER",
  },
  {
    id: "opening-ceremony",
    day: "2026-03-20",
    start: "14:00",
    end: "15:00",
    title: "Opening Ceremony",
    location: "@OAK_LECTURE_THEATRE",
  },
  {
    id: "networking",
    day: "2026-03-20",
    start: "15:00",
    end: "16:00",
    title: "Networking",
  },
  {
    id: "workshops",
    day: "2026-03-20",
    start: "16:00",
    end: "18:00",
    title: "Workshops + Q&A",
  },
  {
    id: "team-submission",
    day: "2026-03-20",
    start: "18:30",
    title: "Team Submission Deadline",
  },
  {
    id: "dinner",
    day: "2026-03-20",
    start: "18:30",
    title: "Dinner",
  },
  {
    id: "end-of-day-1",
    day: "2026-03-20",
    start: "23:00",
    title: "End of Day",
  },
  {
    id: "breakfast-day-2",
    day: "2026-03-21",
    start: "8:00",
    title: "Breakfast",
  },
  {
    id: "break-day-2-morning",
    day: "2026-03-21",
    start: "10:30",
    title: "Mental Health Break",
  },
  {
    id: "lunch-day-2",
    day: "2026-03-21",
    start: "12:00",
    title: "Lunch",
  },
  {
    id: "break-day-2-afternoon",
    day: "2026-03-21",
    start: "15:00",
    title: "Mental Health Break",
  },
  {
    id: "dinner-day-2",
    day: "2026-03-21",
    start: "18:00",
    title: "Dinner",
  },
  {
    id: "break-day-2-evening",
    day: "2026-03-21",
    start: "20:30",
    title: "Mental Health Break",
    description: "With board games",
  },
  {
    id: "end-of-day-2",
    day: "2026-03-21",
    start: "23:00",
    title: "End of Day",
  },
  {
    id: "breakfast-day-3",
    day: "2026-03-22",
    start: "8:00",
    title: "Breakfast",
  },
  {
    id: "break-day-3",
    day: "2026-03-22",
    start: "10:30",
    title: "Mental Health Break",
  },
  {
    id: "submission",
    day: "2026-03-22",
    start: "12:00",
    title: "Submission Deadline",
  },
  {
    id: "lunch-day-3",
    day: "2026-03-22",
    start: "12:00",
    title: "Lunch",
  },
  {
    id: "pitch",
    day: "2026-03-22",
    start: "13:00",
    end: "15:00",
    title: "Pitch & Judging",
  },
  {
    id: "judging",
    day: "2026-03-22",
    start: "15:00",
    title: "Judging Deliberation",
  },
  {
    id: "closing",
    day: "2026-03-22",
    start: "15:30",
    end: "17:00",
    title: "Closing & Awards Ceremony",
  },
];
