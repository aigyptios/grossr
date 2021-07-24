import { ECaseStatus, ICase } from "../types";

const randInt = (max: number) => Math.floor(Math.random() * max)
const randDOB = () => `${1970 + randInt(40)}-${(1 + randInt(12)).toString().padStart(2, '0')}-${(1 + randInt(28)).toString().padStart(2, '0')}`
const randFirst = () => ['Joe', 'Jack', 'Jane', 'Jerry', 'James', 'Jill'][randInt(6)]
const randLast = () => ['Schmoe', 'Schmack', 'Schmane', 'Schmerry', 'Schames', 'Schill'][randInt(6)]

let id = 10001;

export const createNewCase = (values: any = {}) : ICase => ({
  firstName: randFirst(),
  lastName: randLast(),
  id: id++,
  notes: [],
  images: [],
  status: ECaseStatus.CREATED,
  dob: randDOB(),
  meta: {
    created: new Date().valueOf()
  },
  ...values
})
export const cases: ICase[] = [0,0,0,0,0].map(createNewCase)


export const cases2 = [
  { id: 0, firstName: 'Joe', lastName: 'Schmoe'},
  { id: 1, firstName: 'Jack', lastName: 'Schmack'},
  { id: 2, firstName: 'Jane', lastName: 'Schmane'},
  { id: 3, firstName: 'Jerry', lastName: 'Schmerry'}
];