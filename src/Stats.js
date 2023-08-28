import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedItems / numItems) * 100);
  if (numItems === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your list!</em>
      </footer>
    );
  else
    return (
      <footer className="stats">
        <em>
          {percentagePacked === 100
            ? "You have everything! Ready to go"
            : `You have ${numItems} items in your list, and you already packed ${packedItems} (${percentagePacked}% of items)`}
        </em>
      </footer>
    );
}
