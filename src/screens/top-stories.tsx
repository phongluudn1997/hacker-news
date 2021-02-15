import * as React from "react";
import { useTopStories } from "utils/top-stories";
import { ItemRow } from "components/item-row";
function TopStories() {
  const { data: topStories, isLoading, isError } = useTopStories();
  const [itemCount, setItemCounts] = React.useState(10);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-2">
      {topStories
        .filter((_: string, index: number) => index < itemCount)
        .map((id: string, index: number) => (
          <ItemRow key={id} id={id} />
        ))}
      <button
        className="p-2 bg-primary-400 font-medium rounded hover:bg-primary-500 transition ease-in-out duration-100"
        onClick={() => setItemCounts((old) => old + 10)}
      >
        Load more...
      </button>
    </div>
  );
}

export { TopStories };
