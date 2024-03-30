import { useEffect, useReducer } from "react";
import { getCitiesByName } from "@/infra/OpenWeather";
import { City } from "@/types/City";

type State = {
  keyword: string;
  cities: City[];
};

type Action = {
  type: string;
  payload: { keyword: string; cities: City[] };
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_SEARCH_KEYWORD":
      return { ...state, keyword: action.payload.keyword };
    case "SET_CITIES":
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.keyword]);

  const searchCity = (keyword: string) => {
    console.log(keyword);
    dispatch({ type: "SET_SEARCH_KEYWORD", payload: { keyword, cities: [] } });
  };

  const setSearchResult = async (keyword: string) => {
    const cities = await getCitiesByName(keyword);
    dispatch({ type: "SET_CITIES", payload: { ...state, cities } });
  };

  return { searchCity, cities: state.cities };
}
