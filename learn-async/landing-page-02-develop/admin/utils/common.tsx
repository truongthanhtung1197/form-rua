export const getErrorMessage = (e: string) => {
  switch (e) {
    case 'duplicate key value violates unique constraint "uniqueSlug"': {
      return "Tiêu đề không được trùng";
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
