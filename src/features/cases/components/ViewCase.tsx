import { useCaseFromIdParam } from "../../../app/hooks";
import { PageHeading, Card, FormElement } from "../../../common";
import CaseActions from "./CaseActions";
import SpecimenImage from "./SpecimenImage";
import { createUseStyles } from "react-jss";
import { ECaseStatus } from "../../../types";

const useStyles = createUseStyles({
  specimenWrapper: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '10px',
    marginRight: '10px',
    position: 'relative',
  },
  note: {
    background: '#f0f8ff',
    padding: '5px 25px 5px 5px',
    marginBottom: '5px',
    borderRadius: '3px',
    position: 'relative',
  },
  meta: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    marginTop: '10px'
  }
})

export default function ViewCase() {
  const whichCase = useCaseFromIdParam();
  const styles = useStyles();
  if (whichCase) {
    const { firstName, lastName, images, notes, dob, status, meta } = whichCase;
    return (
      <div>
        <PageHeading>{firstName} {lastName}</PageHeading>
        <Card>
          <FormElement label="First Name">{firstName}</FormElement>
          <FormElement label="Last Name">{lastName}</FormElement>
          <FormElement label="Date of Birth">{dob}</FormElement>
          <FormElement label="Specimen">
            {images.map((image, i) =>
              <div key={i} className={styles.specimenWrapper}>
                <SpecimenImage 
                  image={image}
                />
              </div>
            )}
          </FormElement>
          <FormElement label="Notes">
            {notes.map((note, i) =>
              <p className={styles.note} key={i}>
                {note.text.split('\n').map( (text, j) => <span key={j}>{text}<br /></span>)}
              </p>
            )}
          </FormElement>
          <FormElement label="Status">
            {ECaseStatus[status]}
          </FormElement>
          <FormElement>
            <CaseActions whichCase={whichCase} />
          </FormElement>
        </Card>
        <p className={styles.meta}>Created at {new Date(meta.created).toLocaleDateString()}. {meta.lastUpdated && `Last edited ${new Date(meta.lastUpdated).toLocaleDateString()}`}</p>
      </div>
    );
  } else {
    return null;
  }

}