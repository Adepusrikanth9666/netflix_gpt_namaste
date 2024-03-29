import appStore from "./appStore";
export const USER_LOGO =
  "https://lh3.googleusercontent.com/a/ACg8ocIKJQZozYUiLfsU6ZQRDK0zkH54JWQqOJFSriGXAycbM1U=s96-c";
export const MOVIE_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZjZTMyNDQ0NTBhOTQ4M2QyMDA1MjUyN2Y2N2M1MyIsInN1YiI6IjYzMWMyYWIwMWFjMjkyMDA3ZjBmMTFmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fAKqkFxQ_xPXpcFS_B0csug75lBrU3_swVdy66Kjlz4",
  },
};
export const IMGAGE_CDN = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LAGAUGES = [
  {
    id: "english",
    name: "English",
  },
  {
    id: "telugu",
    name: "Telugu",
  },
  {
    id: "hindi",
    name: "Hindi",
  },
  {
    id: "spanish",
    name: "Spanish",
  },
];
