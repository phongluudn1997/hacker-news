import * as React from "react";
import { useItem } from "utils/item";
import { formatDistanceToNow } from "date-fns";
import { ItemSkeleton } from "components/item-skeleton";

function ItemRow({ id }: any) {
  const { data: item, isLoading } = useItem(id);

  if (isLoading) {
    return <ItemSkeleton />;
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={item.url}
      className="block p-6 hover:text-indigo-500 rounded-md hover:shadow-md hover:bg-indigo-50 border border-transparent hover:border-indigo-400 transition duration-50 ease-in-out transform hover:translate-x-1"
    >
      <h1 className="font-medium text-xl mb-2">{item.title}</h1>
      <p>
        Posted{" "}
        <span className="font-bold">
          {formatDistanceToNow(new Date(item.time * 1000))}
        </span>{" "}
        ago by <span className="font-bold">{item.by}</span>
      </p>
    </a>
  );
}

export { ItemRow };
