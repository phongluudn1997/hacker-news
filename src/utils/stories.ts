import { useQuery } from "react-query";
import { client } from "utils/api-client";

function useTopStories() {
  return useQuery({
    queryKey: "top-stories",
    queryFn: () => client("topstories.json"),
  });
}

function useNewStories() {
  return useQuery({
    queryKey: "new-stories",
    queryFn: () => client("newstories.json"),
  });
}

export { useTopStories, useNewStories };
