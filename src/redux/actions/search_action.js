import { SET_CATEGORY, SET_LANGUAGE, SET_SEARCH } from "./types";

export function setSearch(searchTerm) {
  return {
    type: SET_SEARCH,
    payload: searchTerm,
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
}

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
}
