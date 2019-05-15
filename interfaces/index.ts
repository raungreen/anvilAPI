// You can include shared interfaces in a separate file and then
// use them in any component by importing them. For example, to
// import the interface below do:
//
// import IDataObject from 'path/to/interfaces';

export default interface People {
  id: number | string;
  projectName: string;
  date: string | number;
  task: string;
  time: number;
  billable: boolean;
  fullname: string;
  name: string;
}

// export default interface peopleData {
//   acc: number;
//   curr: string;
// }
