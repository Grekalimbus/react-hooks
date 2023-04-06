import React, { useState, useMemo, useRef } from 'react';

function complexeComputed(num) {
  console.log('complexeComputed');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

const UseMemo = () => {
  const [number, setNumber] = useState(42);
  const computed = useMemo(() => {
    return complexeComputed(number);
  }, [number]);
  const [booleanValue, setBooleanValue] = useState(true);

  return (
    <div>
      <h1>Вычисляемое свойство: {computed}</h1>
      <h1>boolean: {JSON.stringify(booleanValue)}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Убрать</button>
      <button onClick={() => setBooleanValue((prev) => !prev)}>Изменить boolean</button>
    </div>
  );
};

export default UseMemo;
