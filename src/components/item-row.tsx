import * as React from "react";
import { useItem } from "utils/item";

function ItemRow({ id }: any) {
  const { data: item, isLoading } = useItem(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={item.url}
      className="block p-6 hover:text-indigo-500 rounded-md hover:shadow-md hover:bg-indigo-50 border border-transparent hover:border-indigo-400 transition duration-50 ease-in-out transform hover:translate-x-1"
    >
      <h1 className="font-medium text-xl">{item.title}</h1>
      <p>
        Posted {item.time} ago by {item.by}
      </p>
    </a>
  );
}

export { ItemRow };
