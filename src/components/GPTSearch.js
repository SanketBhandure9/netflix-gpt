import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto md:object-none"
          src={BACKGROUND_IMAGE}
          alt="backgroundImage"
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
