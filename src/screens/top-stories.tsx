import * as React from "react";
import { useTopStories } from "utils/stories";
import { ListItems } from "components/list-items";
import { LoadMoreButton } from "components/load-button";

function TopStories() {
  const { data: topStories, isLoading, isError } = useTopStories();
  const [itemCount, setItemCounts] = React.useState(10);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-2">
      <ListItems
        items={topStories.filter(
          (_: string, index: number) => index < itemCount
        )}
      />
      <LoadMoreButton onClick={() => setItemCounts((old) => old + 10)} />
    </div>
  );
}

export { TopStories };
