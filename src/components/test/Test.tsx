/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ListItem from "./ListItem";

const Test = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <div className="">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          openItemId={openItemId}
          setOpenItemId={setOpenItemId}
        />
      ))}
    </div>
  );
};

export default Test;
