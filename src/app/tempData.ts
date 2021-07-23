import { ActionCreator } from "@reduxjs/toolkit";
import { acceptCase, rejectCase, resubmitCase, submitCase } from "../features/cases/casesSlice";
import { ECaseStatus, ICase } from "../types";

const randInt = (max: number) => Math.floor(Math.random() * max)
const randDOB = () => `${1970 + randInt(40)}-${1 + randInt(12)}-${1 + randInt(28)}`
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


type TAvailableAction = {
  actionName: string,
  action: ActionCreator<any>
}

export const getAvailableStatusActions = (status: ECaseStatus): TAvailableAction[] => {
  switch(status) {
    case ECaseStatus.CREATED:
      return [{
        actionName: 'submit',
        action: submitCase
      }]
    case ECaseStatus.SUBMITTED:
    case ECaseStatus.RESUBMITTED:
      return [{
        actionName: 'accept',
        action: acceptCase
      },{
        actionName: 'reject',
        action: rejectCase
      }]
      case ECaseStatus.REJECTED:
        return [{
          actionName: 'resubmit',
          action: resubmitCase
        }]
    default:
      return []
  }
}