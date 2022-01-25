# how to use

1. npm i
2. node index or node quiz (для второго задания)

## Текущая дата и время в формате ISO:
node index current

## Текущий год:
node index current --year или node index current -y

## Текущий месяц:
node index current --month или node index current -m

## Дата в календарном месяце:
node index current --date или node index current -d

## Возможность получать даты в прошлом или будущем через команды add и sub:
node index add -d 2 - дата и время в формате ISO на два дня вперед node index sub --month 1 - дата и время в формате ISO на 1 месяц назад

## Задание 2

Примерный ход работы

node quiz
1. Загадано число в диапазоне от 0 до 100
2. 1
3. Больше
4. 75
5. Меньше
6. 55
7. Отгадано число 55