import { SET_SEARCH } from "./types";

export function setSearch(searchTerm) {
  return {
    type: SET_SEARCH,
    payload: searchTerm,
  };
}
