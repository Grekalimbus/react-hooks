import React, { useState, useMemo } from 'react';

function complexeComputed(num) {
  console.log('complexeComputed');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

//1. Если переменную с вызовом complexeComputed(number) не обернуть в useMemo, при каждом рендере будет происходить сложное вычисление, которое тормозит приложение. Также можно увидеть в консоли, что даже когда мы используем клик по button, который не связан с computed, он меняет состояние number и рендерит страницу, после чего функция снова делает вычисление и выводит в консоль "complexeComputed".
//2. Если мы оборачиваем функцию в useMemo и указываем зависимость, функция не будет вызываться при каждом рендере а будет вызываться лишь тогда, когда изменилось значение зависимости в массиве useMemo.

const UseMemo = () => {
  const [number, setNumber] = useState(42);
  // const computed = complexeComputed(number);
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
