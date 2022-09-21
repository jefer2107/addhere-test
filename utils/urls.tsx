/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image: string) => {
    // if (!image) {
    //   return "/vercel.svg"; //Or default image here
    // }
    // if (image.url.indexOf("/") === 0) {
    //   //It's a relative url, add API URL
    //   return `${API_URL}${image.url}`;
    // }
  
    // return image.url;

    return `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${image}`;
};

export const getFileName = (url: string): string => {
    return url?.split(/(\\|\/)/g).pop() || '';
}