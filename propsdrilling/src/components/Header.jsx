import {useContext} from "react";
import {ShoppingContext} from "../providers/ShoppingProvider.jsx";

export const Header = ({children}) => {

    const shoppingList = useContext(ShoppingContext)
    const totalItems = shoppingList.todos.length;
    const completedItems = 1;

    return (
        <header className="bg-blue-600 text-white p-4 mb-6">
            <div className="max-w-md mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Shopping Cart</h1>
                {children}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                        </svg>
                        <span className="font-semibold">{totalItems} items</span>
                    </div>

                    <div className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                        {completedItems} bought
                    </div>
                </div>
            </div>
        </header>
    );
};