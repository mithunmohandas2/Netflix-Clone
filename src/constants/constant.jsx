//API Key in Secret Data File
import { TMDB_API_KEY } from "../../secretData";

export const baseUrl = 'https://api.themoviedb.org/3/';
export const API_KEY =  TMDB_API_KEY;
export const imgUrl = 'https://image.tmdb.org/t/p/original';

export const originalsUrl =`${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`
export const ActionUrl =`${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`

export const YoutubeBaseUrl = 'https://www.youtube.com/watch?v='