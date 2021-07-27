import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useCaseFromIdParam } from "../../../app/hooks";
import { PageHeading, Card, Button, FormElement } from "../../../common";
import { ECaseStatus, ICase } from "../../../types";
import { updateCase } from "../casesSlice";
import CaseForm from "./CaseForm";

export default function EditCase() {

  const   dispatch = useAppDispatch();
  const  whichCase = useCaseFromIdParam();
  const    history = useHistory();

  const [localCase, setLocalCase] = useState<ICase | undefined>(whichCase);

  if (whichCase?.status === ECaseStatus.APPROVED) 
    history.push(`/case/${whichCase.id}`);

  const save = () => {
    dispatch(updateCase(localCase!));
    history.push(`/case/${whichCase!.id}`);
  }

  return (
    whichCase ? <div>
      <PageHeading>Edit Case (ID: {whichCase.id})</PageHeading>
      <Card>
        <CaseForm initialCaseData={whichCase} setCaseData={setLocalCase}/>
        <FormElement>
          <Button onClick={() => history.goBack()}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </FormElement>
      </Card>
    </div>
    : null
  );
}