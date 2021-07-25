import { IAnnotation } from "react-image-annotation";

// export interface IAnnotation {
//   selection: any,
//   geometry: {
//     type: string
//   },
//   data: string
// }

export interface IAnnotatedImage {
  id: number,
  src: string,
  alt: string,
  annotations?: IAnnotation[]
}

export interface INote {
  text: string
}

export enum ECaseStatus {
  CREATED,
  SUBMITTED,
  RESUBMITTED,
  APPROVED,
  REJECTED
}

export interface ICaseMetaData {
  created: number,
  lastUpdated?: number
}

export interface ICase {
  firstName: string,
  lastName: string,
  id: number,
  notes: INote[],
  images: IAnnotatedImage[],
  status: ECaseStatus,
  dob: string,
  meta: ICaseMetaData
}