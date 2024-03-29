import { useEffect, useReducer } from "react";
import { getCitiesByName } from "@/infra/OpenWeather";
import { City } from "@/types/City";

type State = {
  keyword: string;
  cities: City[];
};

function reducer(state: State, action: any) {
  switch (action.type) {
    case "SET_SEARCH_KEYWORD":
      return { ...state, keyword: action.payload.keyword };
    case "SET_SEARCH_RESULT":
      return { ...state, cities: action.payload.cities };
    default:
      throw new Error("This action type is not supported");
  }
}

export default function useCity() {
  const [state, dispatch] = useReducer(reducer, {
    keyword: "",
    cities: [],
  });

  useEffect(() => {
    if (!state.keyword) return;

    (async () => {
      setSearchResult(state.keyword);
    })();

    return () => {};
  }, [state.keyword]);

  const searchCity = (keyword: string) => {
    console.log(keyword);
    dispatch({ type: "SET_SEARCH_KEYWORD", payload: { keyword } });
  };

  const setSearchResult = async (keyword: string) => {
    const cities = await getCitiesByName(keyword);
    dispatch({ type: "SET_SEARCH_RESULT", payload: { cities } });
  };

  return { searchCity, cities: state.cities };
}
