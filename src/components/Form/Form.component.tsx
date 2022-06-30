import React, { SyntheticEvent } from 'react';

interface FormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: SyntheticEvent) => void;
}

const FormComponent: React.FC<FormProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center w-full">
      <div className="relative mr-4 w-full">
        <input
          type="text"
          id="new_item"
          onChange={($event) => onChange($event.target.value)}
          value={value}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-500 bg-transparent rounded-lg border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="new_item"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Create new item
        </label>
      </div>

      <button
        type="submit"
        disabled={!value.length}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
};

export default FormComponent;
