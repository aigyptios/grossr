import { Link } from "react-router-dom";
import { useCaseFromIdParam } from "../../../app/hooks";
import { ECaseStatus } from "../../../types";
import CaseActions from "./CaseActions";
import SpecimenImage from "./SpecimenImage";


export default function ViewCase() {
  const whichCase = useCaseFromIdParam();
  if (whichCase) {
    const { firstName, lastName, images, notes, dob, status, meta } = whichCase;
    return (
      <div>
        <h3>{firstName} {lastName}</h3>
        <p>Status: {ECaseStatus[status]}</p>
        <p>DOB: {dob}</p>
        {images.map((image, i) => (
          <SpecimenImage 
            image={image}
          />
        ))}<br />
        {notes.map((note, i) => <p key={i}>{note.text}</p>)}
        <CaseActions whichCase={whichCase} />
        <p>Created at {new Date(meta.created).toString()}</p>
        {meta.lastUpdated && <p>Last updated {new Date(meta.lastUpdated).toString()}</p>}
        <Link to={`/cases`}>Back to Case List</Link>
      </div>
    );
  } else {
    return null;
  }

}