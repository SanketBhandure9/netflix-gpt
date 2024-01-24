import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, GPT_HARDCODED_MOVIE_RESULTS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieDetailsTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of five movies, comma seperated like the example result given ahead. Example Result: Parasite, Tumbbad, 96, Kumbhalangi Nights, The Pursuite of Happiness";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if(!gptResults.choices) {// TODO: Error Handling}

    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = GPT_HARDCODED_MOVIE_RESULTS.split(",");

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) =>
      searchMovieDetailsTMDB(movie)
    );

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          className="m-4 p-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 px-4 py-2 col-span-3 bg-red-700 text-white rounded-lg"
          ref={searchText}
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
