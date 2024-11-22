export const cookieGet = (slug: string) => {
  const cookies = document.cookie
    .split(";")
    .map((item) => item.trim())
    .filter((item) => item.startsWith(`${slug}=`))
    ?.map((item) => item.split("=")[1])
    ?.filter((item) => item);

  return cookies[cookies.length - 1];
};
