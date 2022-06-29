import React from 'react';

import { Item } from './Item.types';

interface ItemProps {
  item: Item;
  onSelectedChange: (id: string) => void;
  onDelete: (id: string) => Promise<void>;
}

const ItemComponent: React.FC<ItemProps> = ({ item, onSelectedChange, onDelete }) => {
  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <p className="mr-2 mb-0">{item.name}</p>
        <p className="mb-0">Is Selected: {item.selected.toString()}</p>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={() => onSelectedChange(item.id)}
          className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Toggle
        </button>
        <button
          type="button"
          onClick={() => onDelete(item.id)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ItemComponent;
