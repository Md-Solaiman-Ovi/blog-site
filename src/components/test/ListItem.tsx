import EditPopup from "./EditPopup";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ListItem = ({ item, openItemId, setOpenItemId }: any) => {
  const isOpen = openItemId === item.id;

  const toggleEditPopup = () => {
    setOpenItemId(isOpen ? null : item.id);
  };

  return (
    <div className="flex gap-4">
      <span>{item.name}</span>
      <button onClick={toggleEditPopup}>...</button>
      {isOpen && <EditPopup />}
    </div>
  );
};

export default ListItem;
