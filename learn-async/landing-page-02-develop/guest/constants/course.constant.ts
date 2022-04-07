export const REVIEW_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 4,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};
export const GALLERY_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
export const NEWS_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 80,
  },
};

export const VIEW_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

export const COURSE_LIST_FILTER = {
  filter: {
    limit: 10,
    offset: 0,
    order: "createdAt DESC",
  },
};
