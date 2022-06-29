import React from 'react';
import { Item } from '../Item/Item.types';

import ItemComponent from '../Item/Item.component';

interface ListProps {
  items: Item[];
  onSelectedChange: (id: string) => void;
  onDelete: (id: string) => Promise<void>;
}

const ListComponent: React.FC<ListProps> = ({ items, onSelectedChange, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemComponent key={item.id} item={item} onSelectedChange={onSelectedChange} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ListComponent;
