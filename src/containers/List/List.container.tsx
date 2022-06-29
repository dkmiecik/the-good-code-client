import { SyntheticEvent, useCallback, useEffect, useState } from 'react';

import { getItems, toggleSelectedItem, deleteItem, createItem } from '../../services/list.service';
import { Item } from '../../components/Item/Item.types';
import ListComponent from '../../components/List/List.component';
import FormComponent from '../../components/Form/Form.component';

const ListContainer = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [item, setItem] = useState<string>('');

  const init = async () => {
    const { data } = await getItems();
    setItems(data);
  };

  useEffect(() => {
    init();
  }, []);

  const submitHandler = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();

      const { data } = await createItem(item);
      setItems((prevState) => [...prevState, data]);
      setItem('');
    },
    [item],
  );

  const itemChangeHandler = (value: string) => {
    setItem(value);
  };

  const selectedChangeHandler = async (id: string) => {
    await toggleSelectedItem(id);
    await init();
  };

  const deleteHandler = async (id: string) => {
    await deleteItem(id);
    await init();
  };

  return (
    <section className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:w-full sm:rounded-lg sm:px-10">
      <FormComponent value={item} onChange={itemChangeHandler} onSubmit={submitHandler} />
      {items && <ListComponent items={items} onSelectedChange={selectedChangeHandler} onDelete={deleteHandler} />}
    </section>
  );
};

export default ListContainer;
