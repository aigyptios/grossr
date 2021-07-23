export type TAnnotation = {

}

export interface IAnnotationData {
  imageId: string,
  annotation: TAnnotation
}

export interface INote {
  text: string,
  annotationData?: IAnnotationData,
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
  images: string[],
  status: ECaseStatus,
  dob: string,
  meta: ICaseMetaData
}