import { useHistory } from "react-router-dom"
import { useAppDispatch } from "../../../app/hooks"
import { ECaseStatus, ICase } from "../../../types"
import { acceptCase, rejectCase, resubmitCase, submitCase } from "../casesSlice"

type TCaseAction = {
  label: string,
  handler: (() => void)
}

interface ICaseActionsProps {
  whichCase: ICase
}
export default function CaseActions({ whichCase }: ICaseActionsProps) {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id, status } = whichCase;

  let availableActions: TCaseAction[];
  switch(status) {
    case ECaseStatus.CREATED:
      availableActions = [
        { label: 'submit', handler: () => dispatch(submitCase(id)) },
        { label: 'edit', handler: () => history.push(`/case/${id}/edit`) }
      ]
      break;
    case ECaseStatus.SUBMITTED:
    case ECaseStatus.RESUBMITTED:
      availableActions = [
        { label: 'accept', handler: () => dispatch(acceptCase(id)) },
        { label: 'reject', handler: () => dispatch(rejectCase(id)) }
      ]
      break;
    case ECaseStatus.REJECTED:
      availableActions = [
        { label: 'resubmit', handler: () => dispatch(resubmitCase(id)) },
        { label: 'edit', handler: () => history.push(`/case/${id}/edit`) }]
      break;
    default:
      availableActions = []
  }

  return <>
    { availableActions.map( ({handler, label}, i) => <button key={i} onClick={handler}>{ label.toUpperCase() }</button>) }
  </>
}