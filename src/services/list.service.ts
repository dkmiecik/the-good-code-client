import { AxiosResponse } from 'axios';

import { instance } from '../utils/api';
import { Item } from '../components/Item/Item.types';

export const getItems = async (): Promise<AxiosResponse<Item[]>> => {
  return await instance.get('items');
};

export const toggleSelectedItem = (id: string) => {
  return instance.post(`item/${id}`);
};

export const deleteItem = (id: string) => {
  return instance.delete(`item/${id}`);
};

export const createItem = (name: string): Promise<AxiosResponse<Item>> => {
  return instance.put('item', { name });
};
