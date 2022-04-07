import moment from "moment";
export const getErrorMessage = (e: string) => {
  switch (e) {
    case "Invalid email or password.": {
      return "Invalid email or password!";
    }
    default: {
      return "Something wrong!";
    }
  }
};

export const checkApiStatus = (res: any) => {
  if (res.ok && (res.status === 200 || res.status === 204)) {
    return true;
  }

  return false;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const formatDate = (date: any): string => moment(date).format("DD/MM/YYYY");

const regex = /(<([^>]+)>)/gi;
export const formatContent = (text: any): any => text.replace(regex, "");

export const handleHashtag = (text: string) => text.split(",");

export const formatContentView = (text: any, count: number) =>
  text.length > count ? text.slice(0, count) + "..." : text;
