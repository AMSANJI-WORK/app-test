export const handleErrorResponse = (error) => {
  const { status } = error.response;
  if (!status) console.log("خطا در اتصال به اینترنت");
  switch (status) {
    case 400:
      console.log("داده های ارسالی نا معتبر میباشد");
      break;
    default:
      break;
  }
};

