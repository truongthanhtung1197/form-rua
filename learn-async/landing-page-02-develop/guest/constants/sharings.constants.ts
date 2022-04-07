export const NEWS_POST_SHARINGS = {
  filter: {
    limit: 1,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
      type: "NORMAL",
    },
  },
};

export const LIST_NEWS_POST_SHARINGS = {
  filter: {
    limit: 6,
    offset: 0,
    order: "createdAt DESC",
    where: { type: "NORMAL", status: "SHOW" },
  },
};
export const LIST_POST_HIGHLIGHT_2_SHARING = {
  filter: {
    limit: 8,
    offset: 0,
    order: "createdAt DESC",
    where: {
      type: "HIGHLIGHT_2",
      status: "SHOW",
    },
  },
};
export const LIST_POST_HIGHLIGHT_1_SHARING = {
  filter: {
    limit: 8,
    offset: 0,
    order: "createdAt DESC",
    where: {
      type: "HIGHLIGHT_1",
      status: "SHOW",
    },
  },
};
