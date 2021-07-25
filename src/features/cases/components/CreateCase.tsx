import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Card, PageHeading } from "../../../common";
import { ICase } from "../../../types";
import { addCase } from "../casesSlice";
import CaseForm from "./CaseForm";

export default function CreateCase() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [localCase, setLocalCase] = useState<ICase>()

  const save = () => {
    if (localCase) dispatch(addCase(localCase))
    history.push('/cases');
  }

  const cancel = () => {
    history.goBack();
  }

  return (
    <div>
      <PageHeading>Create Case</PageHeading>
      <Card>
        <CaseForm setCaseData={setLocalCase} />
        <button onClick={cancel}>Cancel</button>
        <button onClick={save}>Save</button>
      </Card>
    </div>
  );
}
