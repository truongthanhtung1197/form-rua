import { isDev } from "constants/index";

const ROUTERS = {
  ADMIN: "/admin",

  //user
  USERS: "/users",
  USERS_CREATE: "/users/create",

  //founder
  FOUNDER_UPDATE: "/founder/update",
  FOUNDER_CREATE: "/founder/create",
  FOUNDER: "/founder",

  //program
  COURSE_PROGRAM: "/course-program",
  COURSE_PROGRAM_UPDATE: "/course-program/program/update",
  COURSE_PROGRAM_CREATE: "/course-program/program/create",

  //course-list
  COURSE_LIST: "/course-program/courses/list",
  COURSE_CREATE: "/course-program/courses/create",
  COURSE_UPDATE: "/course-program/courses/update",

  //review
  COURSE_REVIEW: "/course-program/reviews",
  COURSE_REVIEW_CREATE: "/course-program/reviews/create",
  COURSE_REVIEW_UPDATE: "/course-program/reviews/update",

  COURSE_REGIST: "/registration",
  COURSE_BANNER: "/course-program/banner",

  VIEW: "/view",
  VIEW_CREATE: "/view/create",
  VIEW_UPDATE: "/view/update",

  VIEW_ABOUT_ME: "/view-about-me",
  VIEW_ABOUT_ME_UPDATE: "/view-about-me/update",
  VIEW_ABOUT_ME_CREATE: "/view-about-me/create",

  USER_UPDATE: "/users/update",

  POSTS: "/sharing/posts",
  POST_REVIEW: "/sharing/comment",
  POST_CREATE: "/sharing/posts/create",
  POST_UPDATE: "/sharing/update",

  PHOTO: "/photo",
  PHOTO_CREATE: "/photo/create",

  //galary
  VIDEO: "/galary/video",
  VIDEO_CREATE: "/galary/video/create",
  IMAGE: "/galary/image",
  IMAGE_CREATE: "/galary/image/create",

  CONTACT: "/contact",
  LOGIN: (isDev ? "http://localhost:3000" : "https://duongxuanphi.vercel.app") + "/login",
};
export { ROUTERS };
