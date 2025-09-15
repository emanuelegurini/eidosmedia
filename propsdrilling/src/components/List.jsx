import {ItemList} from "./ItemList.jsx";
import { useContext} from "react";
import {ShoppingContext} from "../providers/ShoppingProvider.jsx";

export const List = () => {
    const {todos} = useContext(ShoppingContext)

    return (
        <div className="space-y-2">
            {todos.map(item => (
                <ItemList
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};