import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ICase } from "../../types";
import CaseActions from "./CaseActions";
import { deleteCase } from "./casesSlice";

export function CaseList() {
  const dispatch = useAppDispatch()
  const cases = useAppSelector(state => state.cases.cases)
  return (<>
    <h2>Cases</h2>
    <ul>
      {cases.map((caseItem: ICase) => (
        <li key={caseItem.id}>
          <Link to={`/case/${caseItem.id}`}>{caseItem.firstName} {caseItem.lastName}</Link>
          <button onClick={() => dispatch(deleteCase(caseItem.id))}>Delete</button>
          <Link to={`/case/${caseItem.id}/edit`}>Edit</Link>
          <CaseActions whichCase={caseItem}/>
        </li>
      ))}
      <li>
        <Link to="/case/create">Add new</Link>
      </li>
    </ul>
  </>);
}
