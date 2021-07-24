import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ECaseStatus, ICase } from "../../../types";
import Annotation from 'react-image-annotation';

interface IEditCaseFormProps {
  initialCaseData?: ICase;
  setCaseData: (arg0: ICase) => void;
}

export default function CaseForm({ initialCaseData, setCaseData }: IEditCaseFormProps) {
  const [firstName, setFirstName] = useState(initialCaseData?.firstName || '');
  const   [lastName, setLastName] = useState(initialCaseData?.lastName || '');
  const         [notes, setNotes] = useState(initialCaseData?.notes || []);
  const       [images, setImages] = useState(initialCaseData?.images || []);
  const             [dob, setDob] = useState(initialCaseData?.dob || '');

  const     fileRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const addImages = () => {
    Array.prototype.map.call(fileRef.current?.files, addSingleImage);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const addSingleImage = (file: File) => {
    var reader = new FileReader();
    reader.onload = () => {
      if (reader.result)
        setImages(prevImages => [...prevImages, reader.result as string]);
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
        lastUpdated: Date.now()
      }
    });
  }, [firstName, lastName, notes, images, dob, initialCaseData?.id, initialCaseData?.meta.created, setCaseData]);

  return (
    <>
      <input type="text" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} /><br />
      <input type="text" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} /><br />
      <input type="date" value={dob} onChange={(e: ChangeEvent<HTMLInputElement>) => setDob(e.target.value)} /><br />

      Specimen <br />
      <input type="file" accept="image/*" name="addImages" id="addImages" onChange={addImages} ref={fileRef} multiple /><br />
      {images.map((url, i) =>
        <div key={i}><img src={url} height="200" alt={`Specimen ${i + 1}`} /><button onClick={() => removeImage(i)}>x</button></div>
      )}<br />

      Notes <br />
      {console.log(notes)}
      {notes.filter(note => !note.annotationData).map((note, i) =>
        <p key={i}>{note.text.split('\n').map( (text, j) => <span key={j}>{text}<br /></span>)} <button onClick={() => removeNote(i)}>x</button></p>
      )}<br />
      <textarea ref={textAreaRef}></textarea><button onClick={addNote}>Add Note</button>
    </>
  );
}

// function Specimen({}: ISpecimenProps) {
  
// }
// interface ISpecimenProps {
//   imageSrc: string,
//   imageAlt: string,
//   editable: boolean,
// }