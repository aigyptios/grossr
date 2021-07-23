import { ActionCreator } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../app/hooks"
import { ECaseStatus, ICase } from "../../types"
import { acceptCase, rejectCase, resubmitCase, submitCase } from "./casesSlice"

type TAvailableAction = {
  actionName: string,
  action: ActionCreator<any>
}

const getAvailableStatusActions = (status: ECaseStatus): TAvailableAction[] => {
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

interface ICaseActionsProps {
  whichCase: ICase
}
export default function CaseActions({ whichCase }: ICaseActionsProps) {
  const dispatch = useAppDispatch();
  const id = whichCase.id;
  return <>
    { getAvailableStatusActions(whichCase.status).map( a => <button onClick={() => dispatch(a.action(id))}>{a.actionName.toUpperCase()}</button>) }
  </>
}