import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDelete,
  handleTogglePacked,
  clearList,
}) {
  const [sort, setSort] = useState("order");
  let sortedItems;
  if (sort === "order") {
    sortedItems = items;
  }
  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleTogglePacked={handleTogglePacked}
            clearList={clearList}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="order">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear</button>
      </div>
    </div>
  );
}
