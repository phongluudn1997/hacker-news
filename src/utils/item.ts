import { useQuery } from "react-query";
import { client } from "./api-client";

function useItem(id: string) {
  return useQuery(["item", id], () => client(`item/${id}.json`));
}

export { useItem };
