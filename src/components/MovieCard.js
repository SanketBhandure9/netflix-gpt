import { MOVIE_POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        src={MOVIE_POSTER_CDN_URL + posterPath}
        alt={"Poster of movie '" + title + "'"}
      />
    </div>
  );
};

export default MovieCard;
