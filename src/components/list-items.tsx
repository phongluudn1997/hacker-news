import React from "react";
import { ItemRow } from "./item-row";

function ListItems({ items }: any) {
  return items.map((id: string, index: number) => <ItemRow key={id} id={id} />);
}

export { ListItems };
