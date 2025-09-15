import {ItemList} from "./ItemList.jsx";

export const List = ({ items, onToggle, onDelete }) => {
    return (
        <div className="space-y-2">
            {items.map(item => (
                <ItemList
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};