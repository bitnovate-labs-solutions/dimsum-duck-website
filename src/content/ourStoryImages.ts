export function ourStoryImage(...pathSegments: string[]) {
  return `/images/ourstory/${pathSegments.map(encodeURIComponent).join("/")}`;
}
