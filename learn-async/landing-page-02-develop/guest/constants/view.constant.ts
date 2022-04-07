export const LATEST_VIEW_FILTER = {
  filter: {
    offset: 0,
    limit: 2,
    order: "newsAt DESC",
    where: {
      status: "SHOW",
    },
  },
};
export const LIST_VIEW_FILTER = {
  filter: {
    offset: 2,
    order: "newsAt DESC",
    where: {
      status: "SHOW",
    },
  },
};
export const HIGHLIGHT1_VIEW_FILTER = {
  filter: {
    offset: 0,
    order: "newsAt DESC",
    where: {
      status: "SHOW",
      type: "HIGHLIGHT_1",
    },
  },
};
export const HIGHLIGHT2_VIEW_FILTER = {
  filter: {
    offset: 0,
    order: "newsAt DESC",
    where: {
      status: "SHOW",
      type: "HIGHLIGHT_2",
    },
  },
};
