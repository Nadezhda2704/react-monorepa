import { initTRPC } from '@trpc/server';


const patterns = [
  {
    name: 'Абстрактная фабрика',
    id: '1',
    type: 'creational',
    description: 'Создает семейство взаимосвязанных объектов',
  },
  {
    name: 'Строитель',
    id: '1',
    type: 'creational',
    description: 'Поэтапное создание сложного объекта',
  },
  {
    name: 'Фабричный метод',
    id: '1',
    type: 'creational',
    description: 'Определяет интерфейс для создания объекта, при этом его тип определяется подклассами',
  },
  {
    name: 'Пул объектов',
    id: '1',
    type: 'creational',
    description: 'Создание "затратных" объектов за счет их многократного использования',
  },
  {
    name: 'Прототип',
    id: '1',
    type: 'creational',
    description: 'Создание объектов на основе прототипов',
  },
  {
    name: 'Одиночка',
    id: '1',
    type: 'creational',
    description: 'Создает единственный экземпляр некоторого класса и предоставляет к нему доступ',
  },
  {
    name: 'Адаптер',
    id: '1',
    type: 'structural',
    description: 'Преобразует интерфейс существующего класса к виду, подходящему для использования',
  },
  {
    name: 'Мост',
    id: '1',
    type: 'structural',
    description: 'Делает абстракцию и реализацию независимыми друг от друга',
  },
  {
    name: 'Компоновщик',
    id: '1',
    type: 'structural',
    description: 'Группирует схожие объекты в древовидные структуры',
  },
  {
    name: 'Декоратор',
    id: '1',
    type: 'structural',
    description: 'Динамически добавляет объекту новую функциональность',
  },
  {
    name: 'Фасад',
    id: '1',
    type: 'structural',
    description: 'Предоставляет унифицированный интерфейс вместо набора интерфейсов некоторой системы',
  },
  {
    name: 'Приспособленец',
    id: '1',
    type: 'structural',
    description: 'Использует разделение для поддержки множества мелких объектов',
  },
  {
    name: 'Заместитель',
    id: '1',
    type: 'structural',
    description: 'Подменяет другой объект для контроля доступа к нему',
  },
  {
    name: 'Цепочка обязанностей',
    id: '1',
    type: 'behavioral',
    description: 'Предоставляет способ передачи запроса по цепочке получателей',
  },
  {
    name: 'Команда',
    id: '1',
    type: 'behavioral',
    description: 'Инкапсулирует запрос в виде объекта',
  },
  {
    name: 'Интерпретатор',
    id: '1',
    type: 'behavioral',
    description: 'Для языка определяет его грамматику и интепретатор, использующий эту грамматику',
  },
  {
    name: 'Итератор',
    id: '1',
    type: 'behavioral',
    description: 'Предоставляет механизм обхода элементов коллекции',
  },
  {
    name: 'Посредник',
    id: '1',
    type: 'behavioral',
    description: 'Инкапсулирует взаимодействие между множеством объектов в объект-посредник',
  },
  {
    name: 'Хранитель',
    id: '1',
    type: 'behavioral',
    description: 'Сохраняет и восстанавливает состояние объекта',
  },
  {
    name: 'Наблюдатель',
    id: '1',
    type: 'behavioral',
    description: 'При изменении объекта извещает всех зависимые объекты для их обновления',
  },
  {
    name: 'Состояние',
    id: '1',
    type: 'behavioral',
    description: 'Изменяет поведение объекта при изменении его состояния',
  },
  {
    name: 'Стратегия',
    id: '1',
    type: 'behavioral',
    description: 'Переносит алгоритмы в отдельную иерархию классов, делая их взаимозаменяемыми',
  },
  {
    name: 'Шаблонный метод	',
    id: '1',
    type: 'behavioral',
    description: 'Определяет шаги алгоритма, позволяя подклассам изменить некоторые из них',
  },
  {
    name: 'Посетитель',
    id: '1',
    type: 'behavioral',
    description: 'Определяет новую операцию в классе без его изменения',
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getPatterns: trpc.procedure.query(() => {
    return { patterns };
  }),
});

export type TrpcRouter = typeof trpcRouter;