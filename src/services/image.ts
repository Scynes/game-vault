/**
 * Generates a URL for a cropped image using the provided original URL.
 * The image is cropped to specific dimensions defined by the constant CROP_DIMENSIONS.
 *
 * @param {string} url - The original URL of the image.
 * @returns {string} - The URL of the cropped image.
 */
const getCroppedImageURL = (url: string) => {

    // Define the target subpath in the URL to find the start of the image path.
    const target = 'media/';

    // Calculate the index where the image path starts.
    const index = url.indexOf(target) + target.length;

    // Construct the URL for the cropped image by inserting the cropping dimensions
    // between the base URL and the image path.
    return (url.slice(0, index) + 'crop/600/400/' + url.slice(index));
}

export { getCroppedImageURL };