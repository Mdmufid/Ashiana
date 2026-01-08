export const decodeUrl = (url : string) => {
  return decodeURI(url?.replaceAll("-", " ").replaceAll("and", "&")).toLowerCase();
}

export const encodeUrl = (url : string) => {
    return encodeURI(url?.replaceAll(" ", "-").replaceAll("&", "and")).toLowerCase();
}