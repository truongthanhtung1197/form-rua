export const data = [
  {
    name: "Huyen Trang",
    date: "12/08/2020",
    description:
      "Hãy comment ý kiến của bạn và share bài viết để giúp đỡ nhiều người xung quanh bạn tích cực hơn trong cuộc sống và đó cũng là cách cám ơn để tôi viết nhiều bài hay hơn để các bạn đọc nhé.",
  },
];

const handle = (req: any, res: any) => {
  if (req.method === "GET") {
    res.status(200).json(data);
  }
};
export default handle;
