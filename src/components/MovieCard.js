import { MOVIE_POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-40 md:w-48 pr-4">
      <img
        src={MOVIE_POSTER_CDN_URL + posterPath}
        alt={"Poster of movie '" + title + "'"}
      />
    </div>
  );
};

export default MovieCard;
