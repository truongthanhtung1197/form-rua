export const FILTER_CAROUSEL_POST = {
  filter: {
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
      type: "NORMAL",
    },
  },
};
