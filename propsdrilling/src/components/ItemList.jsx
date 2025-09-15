export const ItemList = ({ item, onToggle, onDelete }) => {
    return (
        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggle(item.id)}
                className="w-4 h-4"
            />
            <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
        {item.text}
      </span>
            <button
                onClick={() => onDelete(item.id)}
                className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
            >
                Delete
            </button>
        </div>
    );
};