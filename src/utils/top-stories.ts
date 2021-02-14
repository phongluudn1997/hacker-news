import { useQuery } from "react-query";
import { client } from "utils/api-client";

function useTopStories() {
  return useQuery({
    queryKey: "top-stories",
    queryFn: () => client("topstories.json"),
  });
}

export { useTopStories };
