import express from 'express';

const patterns = [
  {
    name: 'Абстрактная фабрика',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Строитель',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Фабричный метод',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Пул объектов',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Прототип',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Одиночка',
    id: '1',
    type: 'creational',
  },
  {
    name: 'Адаптер',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Мост',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Компоновщик',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Декоратор',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Фасад',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Приспособленец',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Заместитель',
    id: '1',
    type: 'structural',
  },
  {
    name: 'Цепочка обязанностей',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Команда',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Интерпретатор',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Итератор',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Посредник',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Хранитель',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Наблюдатель',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Состояние',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Стратегия',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Шаблонный метод	',
    id: '1',
    type: 'behavioral',
  },
  {
    name: 'Посетитель',
    id: '1',
    type: 'behavioral',
  },
];

const expressApp = express();
expressApp.get('/ping', (req, res) => {
  res.send('pong');
});
expressApp.get('/patterns', (req, res) => {
  res.send(patterns);
});
expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});
