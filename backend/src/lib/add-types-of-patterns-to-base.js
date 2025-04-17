export const PatternsTypes = [
  {
    name: 'Порождающие',
    description: 'Отвечают за удобное и безопасное создание новых объектов или даже целых семейств объектов.',
    type: 'creational',
  },
  {
    name: 'Структурные',
    description: 'Отвечают за построение удобных в поддержке иерархий классов.',
    type: 'structural',
  },
  {
    name: 'Поведенческие',
    description: 'Решают задачи эффективного и безопасного взаимодействия между объектами программы.',
    type: 'behavioral',
  },
];


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function insertMultipleRows() {
  try {
    const typesOfPatterns = [
      {
        name: 'Порождающие',
        description: 'Отвечают за удобное и безопасное создание новых объектов или даже целых семейств объектов.',
        type: 'creational',
      },
      {
        name: 'Структурные',
        description: 'Отвечают за построение удобных в поддержке иерархий классов.',
        type: 'structural',
      },
      {
        name: 'Поведенческие',
        description: 'Решают задачи эффективного и безопасного взаимодействия между объектами программы.',
        type: 'behavioral',
      },
    ];
    
    const insertedRows = await prisma.TypeOfPattern.createMany({
      data: typesOfPatterns,
    });

    console.log('Inserted rows:', insertedRows);
  } catch (error) {
    console.error('Error inserting rows:', error);
  } finally {
    await prisma.$disconnect();
  }
}

insertMultipleRows();

