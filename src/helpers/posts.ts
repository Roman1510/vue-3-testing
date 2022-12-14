import { DateTime } from "luxon";

interface Post {
  id: string;
  title: string;
  created: string;
}

export interface TimeLinePost extends Omit<Post, "created"> {
  created: DateTime;
}

export const today: Post = {
  id: "1",
  title: "Today",
  created: DateTime.now().toISO(),
};

export const thisWeek: Post = {
  id: "2",
  title: "This week",
  created: DateTime.now().minus({ day: 5 }).toISO(),
};

export const thisMonth: Post = {
  id: "3",
  title: "This month",
  created: DateTime.now().minus({ week: 3 }).toISO(),
};
