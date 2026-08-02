export const siteUrl = "https://kadiryazici.dev"

export function getSiteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString()
}
