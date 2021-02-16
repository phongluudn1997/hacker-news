import * as React from "react";
import { useItem } from "utils/item";
import { formatDistanceToNow } from "date-fns";
import { ItemSkeleton } from "components/item-skeleton";
import { HiChevronDoubleUp, HiStar, HiChatAlt2 } from "react-icons/hi";

function ItemRow({ id }: any) {
  const { data: item, isLoading } = useItem(id);

  if (isLoading) {
    return <ItemSkeleton />;
  }

  return (
    <div className="flex items-start gap-4 m-2">
      <div className="flex flex-col gap-2 p-2 border-2 rounded items-center w-14">
        <HiChevronDoubleUp />
        <span className="font-bold text-gray-700">{item.score}</span>
      </div>
      <div className="flex-grow">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-primary-600 font-medium text-xl"
        >
          {item.title}
        </a>
        <p>
          {formatDistanceToNow(new Date(item.time * 1000))} ago - by{" "}
          <span className="font-bold">{item.by}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <Info icon={<HiStar />} statistic={item.descendants} />
        <Info icon={<HiChatAlt2 />} statistic={item.kids?.length ?? 0} />
      </div>
    </div>
  );
}

function Info({ icon, statistic }: any) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      {statistic}
    </div>
  );
}

export { ItemRow };
