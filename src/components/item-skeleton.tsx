import * as React from "react";

const ItemSkeleton = () => {
  return (
    <div className="m-2 border border-primary-400 rounded-md p-6 block">
      <div className="animate-pulse flex gap-2 flex-col">
        <div className="h-4 w-3/4 rounded bg-primary-500"></div>
        <div className="h-4 w-1/4 rounded bg-primary-500"></div>
      </div>
    </div>
  );
};

export { ItemSkeleton };
