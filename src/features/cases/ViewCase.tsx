import { Link } from "react-router-dom";
import { useAppDispatch, useCaseFromIdParam, useIdParam } from "../../app/hooks";
import CaseActions from "./CaseActions";


export function ViewCase() {
  const id = useIdParam();
  const whichCase = useCaseFromIdParam();
  const dispatch = useAppDispatch();

  return (
    whichCase ? <div>
      <h3>ID: {id}</h3>
      <Link to={`/case/${id}/edit`}>Edit</Link><br />
      <Link to={`/`}>Back</Link>
      {whichCase.images.map(url => <img src={url} height="200" />)}
      <div>
        Actions
          <CaseActions whichCase={whichCase} />
      </div>
    </div>
    : null
  );
}
