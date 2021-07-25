import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { Button, Card, FormElement, PageHeading } from "../../../common";
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
        <FormElement>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </FormElement>
      </Card>
    </div>
  );
}
