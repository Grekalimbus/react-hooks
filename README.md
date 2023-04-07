# Реакт хуки

## useRef - используеться для

### Доступ к нодам (HTML элементам)

### Посчитать количество рендеров

### Сохранение какого либо результата между рендерами

### Получение предедущего state

##

## useMemo - используеться для

### Оптимизация и кеширования данных

### Решает проблему лишней вычислительной работы.

### Перед вызовом функции проверяется, вызывалась ли функция ранее. Если не вызывалась, то функция вызывается и результат её выполнения сохраняется. Если вызывалась, используется сохраненный результат

##

## useCallback - используется для

### по сути для того же, что и useMemo, только useMemo кеширует значение, возвращаемой функции, а useCallback кеширует сам колбек
