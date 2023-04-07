import React, { useState, useCallback } from 'react';
import ItemsList from './ItemsList';

// Отличие useCallback от useMemo в том, что мемо работает со значением, а useCallback соотвественно с колбеком.

const UseCallback = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'red' : 'black',
  };
  // Без useCallback
  // const generateItemsFromAPI = () => {
  //   return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
  // };
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Кол-во элементов: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setColored((prev) => !prev)}>Изменить цвет</button>
      <ItemsList getItems={generateItemsFromAPI}></ItemsList>
    </div>
  );
};

export default UseCallback;
