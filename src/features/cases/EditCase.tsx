import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useCaseFromIdParam, useIdParam } from "../../app/hooks";
import { updateCase } from "./casesSlice";


export function EditCase() {
  const id = useIdParam();
  const dispatch = useAppDispatch();
  const whichChase = useCaseFromIdParam();
  const history = useHistory();

  return (
    whichChase ? <div>
      <h3>Edit {id}!</h3>
      <button onClick={() => history.goBack()}>Cancel</button>
      <button onClick={() => dispatch(updateCase(whichChase))}>Save</button>
    </div>
    : null
  );
}
