export const success = (res, msg, stsCode=200) => ({
  ...res,
  success: true,
  message: msg,
  statusCode: stsCode,
});
export const faliure = (res, msg, stsCode=401) => ({
  ...res,
  success: false,
  message: msg,
  statusCode: stsCode,
});
