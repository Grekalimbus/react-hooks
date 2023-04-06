import React, { useState, useEffect, useRef } from 'react';

const UseRef = () => {
  const [value, setValue] = useState('init');
  const prevValue = useRef('');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  useEffect(() => {
    renderCount.current++;
    prevValue.current = value;
  });
  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлый State: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => inputRef.current.focus()}>Сделать фокус для input</button>
    </div>
  );
};

export default UseRef;
