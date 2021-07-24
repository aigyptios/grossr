import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useCaseFromIdParam } from "../../../app/hooks";
import { ICase } from "../../../types";
import { updateCase } from "../casesSlice";
import CaseForm from "./CaseForm";

export default function EditCase() {

  const   dispatch = useAppDispatch();
  const  whichCase = useCaseFromIdParam();
  const    history = useHistory();

  const [localCase, setLocalCase] = useState<ICase | undefined>(whichCase);

  const save = () => {
    dispatch(updateCase(localCase!));
    history.push(`/case/${whichCase!.id}`);
  }

  return (
    whichCase ? <div>
      <h3>Edit {whichCase.firstName} {whichCase.lastName}!</h3>
      {localCase?.firstName} {localCase?.lastName}
      <CaseForm initialCaseData={whichCase} setCaseData={setLocalCase}/>
      <button onClick={() => history.goBack()}>Cancel</button>
      <button onClick={save}>Save</button>
    </div>
    : null
  );
}