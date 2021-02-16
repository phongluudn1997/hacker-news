import * as React from "react";
import { useNewStories } from "utils/stories";
import { ListItems } from "components/list-items";
import { LoadMoreButton } from "components/lib";

function NewStories() {
  const { data: newStories, isLoading, isError } = useNewStories();
  const [itemCount, setItemCounts] = React.useState(10);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-2">
      <ListItems
        items={newStories.filter(
          (_: string, index: number) => index < itemCount
        )}
      />

      <LoadMoreButton onClick={() => setItemCounts((old) => old + 10)} />
    </div>
  );
}

export { NewStories };
