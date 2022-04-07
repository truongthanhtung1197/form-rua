export const REVIEW_COURSE = "REVIEW_COURSE";
export const REVIEW_ABOUT_ME = "REVIEW_ABOUT_ME";

export const REVIEW_COURSE_FILTER = {
  filter: {
    order: "reviewAt DESC",
    where: {
      type: REVIEW_COURSE,
    },
    include: [
      {
        relation: "mediaContents",
      },
    ],
  },
};
