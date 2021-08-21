export const people = [
  {
    id: 0,
    name: 'iltaek',
    age: 19,
    gender: 'male',
  },
  {
    id: 1,
    name: 'Daal',
    age: 18,
    gender: 'female',
  },
  {
    id: 2,
    name: 'ronaldo',
    age: 35,
    gender: 'male',
  },
  {
    id: 3,
    name: 'britney',
    age: 38,
    gender: 'female',
  },
  {
    id: 4,
    name: 'johnson',
    age: 30,
    gender: 'male',
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
