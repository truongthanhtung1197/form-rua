import PhotoGallery from "./photo";
import VideoGallery from "./video";

export const GALLERY_TABS = [
  {
    id: 0,
    name: "Hình ảnh",
    title: "HÌNH ẢNH",
    content: <PhotoGallery />,
  },
  {
    id: 1,
    name: "Video",
    title: "VIDEO",
    content: <VideoGallery />,
  },
];
