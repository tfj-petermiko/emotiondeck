export function getSafeImagePath(imagePath) {
  if (imagePath.startsWith("/private_images/")) {
    return `/api/images?file=${imagePath.replace("/private_images/", "")}`;
  }
  return imagePath;
}
