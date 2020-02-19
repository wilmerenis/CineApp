export const API_KEY = "d6d4a177c9275fc59d2bfe39c8974a92"
export const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&language=en-US&page=1`

export const getApiURL = (query) => `https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}`
export const getImageURL = (fileName, fileSize) => `https://image.tmdb.org/t/p/${fileSize}${fileName}`