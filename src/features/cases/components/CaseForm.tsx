import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ECaseStatus, ICase, IAnnotatedImage, IAnnotation } from "../../../types";
import { FormElement, Button } from "../../../common";
import SpecimenImage from "./SpecimenImage";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  entryField: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  delete: {
    position: 'absolute',
    right: '10px',
    top: '5px',
    border: 'none',
    background: 'transparent',
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer'
  },
  note: {
    background: '#f0f8ff',
    padding: '5px 25px 5px 5px',
    marginBottom: '5px',
    borderRadius: '3px',
    position: 'relative',
  },
  specimenWrapper: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '10px',
    marginRight: '10px',
    position: 'relative',
  }
})

interface IEditCaseFormProps {
  initialCaseData?: ICase;
  setCaseData: (arg0: ICase) => void;
}

export default function CaseForm({ initialCaseData, setCaseData }: IEditCaseFormProps) {
  const     [firstName, setFirstName] = useState(initialCaseData?.firstName || '');
  const       [lastName, setLastName] = useState(initialCaseData?.lastName || '');
  const             [notes, setNotes] = useState(initialCaseData?.notes || []);
  const           [images, setImages] = useState(initialCaseData?.images || []);
  const                 [dob, setDob] = useState(initialCaseData?.dob || '');

  const     fileRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const styles = useStyles();

  const addImages = () => {
    Array.prototype.map.call(fileRef.current?.files, addSingleImage);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const submitAnnotation = (imageIndex: number, annotation: IAnnotation) => {
    const annotatedImage = images[imageIndex];
    const prevAnnotations = annotatedImage.annotations || [];
    setImages(images.map((image, i) => {
      if (i !== imageIndex)
        return image;
      else
        return {...image, annotations: [...prevAnnotations, annotation]};
    }));
  }

  const addSingleImage = (file: File) => {
    var reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        const url = reader.result as string;
        const annotatedImage: IAnnotatedImage = {
          src: url,
          alt: `Image for specimen ${images.length + 1}`,
          id: images.length + 1,
          annotations: []
        }
        setImages(prevImages => [...prevImages, annotatedImage]);
      }
    };
    reader.readAsDataURL(file);
  };

  const addNote = () => {
    setNotes([...notes, { text: textAreaRef.current!.value }])
    textAreaRef.current!.value = '';
  }
  const removeNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index))
  }

  useEffect(() => {
    setCaseData({
      firstName,
      lastName,
      dob,
      images,
      notes,
      id: initialCaseData?.id || 0,
      status: ECaseStatus.CREATED,
      meta: {
        created: initialCaseData?.meta.created || Date.now(),
        lastUpdated: initialCaseData?.id ? Date.now() : undefined
      }
    });
  }, [firstName, lastName, notes, images, dob, initialCaseData?.id, initialCaseData?.meta.created, setCaseData]);

  return (
    <>
      <FormElement label="First Name">
        <input className={styles.entryField} type="text" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
      </FormElement>
      <FormElement label="Last Name">
        <input className={styles.entryField} type="text" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
      </FormElement>
      <FormElement label="Date of Birth">
        <input className={styles.entryField} type="date" value={dob} onChange={(e: ChangeEvent<HTMLInputElement>) => setDob(e.target.value)} />
      </FormElement>
      <FormElement label="Specimen">
        <input className={styles.entryField} type="file" accept="image/*" name="addImages" id="addImages" onChange={addImages} ref={fileRef} multiple />
        {images.map((image, i) =>
          <div key={i} className={styles.specimenWrapper}>
            <SpecimenImage 
              image={image}
              onSubmit={(annotation: IAnnotation) => submitAnnotation(i, annotation)}
            />
            <button className={styles.delete} onClick={() => removeImage(i)}>&times;</button>
          </div>
        )}
      </FormElement>
      <FormElement label="Notes">
        {notes.map((note, i) =>
          <p className={styles.note} key={i}>
            {note.text.split('\n').map( (text, j) => <span key={j}>{text}<br /></span>)}
            <button className={styles.delete} onClick={() => removeNote(i)}>&times;</button>
          </p>
        )}
        <textarea className={styles.entryField} ref={textAreaRef}></textarea><Button onClick={addNote}>Add Note</Button>
      </FormElement>
    </>
  );
}

