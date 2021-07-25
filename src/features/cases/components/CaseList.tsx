import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ICase } from "../../../types";
import { PageHeading, Card } from "../../../common";
import CaseActions from "./CaseActions";
import { deleteCase } from "../casesSlice";

export default function CaseList() {
  const dispatch = useAppDispatch()
  const cases = useAppSelector(state => state.cases.cases)
  return (<>
    <PageHeading>Cases</PageHeading>
    <Card>
      <ul>
        {cases.map((caseItem: ICase) => (
          <li key={caseItem.id}>
            <Link to={`/case/${caseItem.id}`}>{caseItem.firstName} {caseItem.lastName}</Link>
            <button onClick={() => dispatch(deleteCase(caseItem.id))}>Delete</button>
            <CaseActions whichCase={caseItem}/>
          </li>
        ))}
        <li>
          <Link to="/cases/create">Add new</Link>
        </li>
      </ul>
    </Card>
  </>);
}
