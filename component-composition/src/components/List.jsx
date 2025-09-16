import {ItemList} from "./ItemList.jsx";

export const List = ({todos, handleDelete, handleToggle}) => {

    return (
        <div className="space-y-2">
            {todos.map(item => (
                <ItemList
                    key={item.id}
                    item={item}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};