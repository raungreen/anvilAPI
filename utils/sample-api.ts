import People from '../interfaces';

/** Dummy user data. */
export const dataArray: People[] = [
  {
    id: 101,
    name: 'Alice',
    projectName: 'Cheap Thrills',
    date: '2019-05-14',
    task: 'remove outline',
    time: 2,
    billable: false,
    fullname: 'Alice Smith'
  },
  {
    id: 102,
    name: 'Bob',
    projectName: 'Create New Plan',
    date: '2019-05-05',
    task: 'gather info needed',
    time: 2,
    billable: false,
    fullname: 'Bob Taylor'
  },
  {
    id: 103,
    name: 'Caroline',
    projectName: 'Arrange food option',
    date: '2019-05-01',
    task: 'contact vendors',
    time: 2,
    billable: false,
    fullname: 'Caroline Clementine'
  },
  {
    id: 104,
    name: 'Dave',
    projectName: 'Report annual earning',
    date: '2019-05-01',
    task: 'calculate spending',
    time: 2,
    billable: false,
    fullname: 'Dave West'
  }
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
  const selected = dataArray.find(data => data.id === Number(id));

  if (!selected) {
    throw new Error('Cannot find user');
  }

  return selected;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error('Cannot find users');
  }

  return dataArray;
}
