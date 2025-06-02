const { PrismaClient } = require('@prisma/client');
const { watch } = require('fs');
const prisma = new PrismaClient();
async function insertMultipleRows() {
  try {
    const patterns = [
      {
        name: 'Абстрактная фабрика',
        englishName: 'Abstarct Factory',
        id: '1',
        type: 'creational',
        description: 'Создает семейство взаимосвязанных объектов',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/abstract-factory.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vk.com/video-152990965_456239669',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Строитель',
        englishName: 'Builder',
        id: '12',
        type: 'creational',
        description: 'Поэтапное создание сложного объекта',
        read: [
          {
            id: '1211',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/builder.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '1221',
            name: 'Паттерны и практики написания кода',
            link: 'https://vk.com/video-152990965_456239668',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Фабричный метод',
        englishName: 'Factory Method',
        id: '13',
        type: 'creational',
        description: 'Определяет интерфейс для создания объекта, при этом его тип определяется подклассами',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/factory-method.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vk.com/video-152990965_456239668',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Пул объектов',
        englishName: 'Object Pool',
        id: '14',
        type: 'creational',
        description: 'Создание "затратных" объектов за счет их многократного использования',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: '  ',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [],
      },
      {
        name: 'Прототип',
        englishName: 'Prototype',
        id: '15',
        type: 'creational',
        description: 'Создание объектов на основе прототипов',
        read: [
          {
            id: '1511',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/prototype.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vk.com/video-152990965_456239670',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Одиночка',
        englishName: 'Singleton',
        id: '16',
        type: 'creational',
        description: 'Создает единственный экземпляр некоторого класса и предоставляет к нему доступ',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/singleton.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vk.com/video-152990965_456239670',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Адаптер',
        englishName: 'Adapter',
        id: '21',
        type: 'structural',
        description: 'Преобразует интерфейс существующего класса к виду, подходящему для использования',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/adapter.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239672',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Мост',
        englishName: 'Bridge',
        id: '22',
        type: 'structural',
        description: 'Делает абстракцию и реализацию независимыми друг от друга',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/bridge.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239674',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Компоновщик',
        englishName: 'Composite',
        id: '23',
        type: 'structural',
        description: 'Группирует схожие объекты в древовидные структуры',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/composite.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239672',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Декоратор',
        englishName: 'Decorator',
        id: '24',
        type: 'structural',
        description: 'Динамически добавляет объекту новую функциональность',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/decorator.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239673',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Фасад',
        englishName: 'Facade',
        id: '25',
        type: 'structural',
        description: 'Предоставляет унифицированный интерфейс вместо набора интерфейсов некоторой системы',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/facade.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239673',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Приспособленец',
        englishName: 'Flyweight',
        id: '26',
        type: 'structural',
        description: 'Использует разделение для поддержки множества мелких объектов',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/flyweight.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239674',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Заместитель',
        englishName: 'Proxy',
        id: '27',
        type: 'structural',
        description: 'Подменяет другой объект для контроля доступа к нему',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/proxy.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239674',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Цепочка обязанностей',
        englishName: 'Chain of Responsibility',
        id: '31',
        type: 'behavioral',
        description: 'Предоставляет способ передачи запроса по цепочке получателей',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/chain-of-responsibility.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239677',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Команда',
        englishName: 'Command',
        id: '32',
        type: 'behavioral',
        description: 'Инкапсулирует запрос в виде объекта',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/command.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239678',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Интерпретатор',
        englishName: 'Interpreter',
        id: '33',
        type: 'behavioral',
        description: 'Для языка определяет его грамматику и интепретатор, использующий эту грамматику',
        read: [
          {
            id: '111',
            name: 'metanit',
            link: 'https://metanit.com/sharp/patterns/3.8.php',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [],
      },
      {
        name: 'Итератор',
        englishName: 'Iterator',
        id: '34',
        type: 'behavioral',
        description: 'Предоставляет механизм обхода элементов коллекции',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/iterator.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [],
      },
      {
        name: 'Посредник',
        englishName: 'Mediator',
        id: '35',
        type: 'behavioral',
        description: 'Инкапсулирует взаимодействие между множеством объектов в объект-посредник',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/mediator.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239678',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Хранитель',
        englishName: 'Memento',
        id: '36',
        type: 'behavioral',
        description: 'Сохраняет и восстанавливает состояние объекта',
        read: [],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239676',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Наблюдатель',
        englishName: 'Observer',
        id: '37',
        type: 'behavioral',
        description: 'При изменении объекта извещает всех зависимые объекты для их обновления',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/observer.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239677',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Состояние',
        englishName: 'State',
        id: '38',
        type: 'behavioral',
        description: 'Изменяет поведение объекта при изменении его состояния',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/state.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239679',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Стратегия',
        englishName: 'Strategy',
        id: '39',
        type: 'behavioral',
        description: 'Переносит алгоритмы в отдельную иерархию классов, делая их взаимозаменяемыми',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/strategy.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239679',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Шаблонный метод	',
        englishName: 'Template Method',
        id: '301',
        type: 'behavioral',
        description: 'Определяет шаги алгоритма, позволяя подклассам изменить некоторые из них',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/template-method.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [
          {
            id: '121',
            name: 'Паттерны и практики написания кода',
            link: 'https://vkvideo.ru/video-152990965_456239676',
            type: 'vkVideo',
            typeName: 'Курс',
          },
        ],
      },
      {
        name: 'Посетитель',
        englishName: 'Visitor',
        id: '302',
        type: 'behavioral',
        description: 'Определяет новую операцию в классе без его изменения',
        read: [
          {
            id: '111',
            name: 'Погружение в Паттерны Проектирования',
            link: 'https://refactoringu.ru/ru/design-patterns/visitor.html',
            type: 'website',
            typeName: 'Электронная книга',
          },
        ],
        watch: [],
      },
    ];
    const insertedRows = await prisma.Pattern.createMany({
      data: patterns,
    });

    console.log('Inserted rows:', insertedRows);
  } catch (error) {
    console.error('Error inserting rows:', error);
  } finally {
    await prisma.$disconnect();
  }
}

insertMultipleRows();
