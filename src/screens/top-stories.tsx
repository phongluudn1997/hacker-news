import * as React from "react";
import { useTopStories } from "utils/top-stories";
import { ItemRow } from "components/item-row";
function TopStories() {
  const { data: topStories, isLoading, isError } = useTopStories();
  const [itemCount, setItemCounts] = React.useState(10);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {topStories
        .filter((_: string, index: number) => index < itemCount)
        .map((id: string, index: number) => (
          <ItemRow key={id} id={id} />
        ))}
      <button onClick={() => setItemCounts((old) => old + 10)}>
        Load more
      </button>
    </div>
  );
}

export { TopStories };
