import { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { createNewCase } from "../../app/tempData";
import { addCase } from "./casesSlice";

export function CreateCase() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [imgSrcValues, setImgSrcValues] = useState<string[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  const save = () => {
    dispatch(addCase(createNewCase({
      images: imgSrcValues
    })))
    history.push('/cases');
  }

  const cancel = () => {
    imgSrcValues.map( url => URL.revokeObjectURL(url));
    history.goBack();
  }

  // useEffect(() => {
  //   return () => {
  //     imgSrcValues.map( url => URL.revokeObjectURL(url))
  //   }
  // })

  const addImages = () => {
    imgSrcValues.map( url => URL.revokeObjectURL(url))
    setImgSrcValues(Array.prototype.map.call(fileRef.current?.files, (file) => URL.createObjectURL(file)) as string[])
  }
  return (
    <div>
      <h3>Create!</h3>
      <input type="file" accept="image/*" name="addImages" id="addImages" onChange={addImages} ref={fileRef} multiple/>
      {imgSrcValues.map(url => <img src={url} height="200" />)}
      <button onClick={cancel}>Cancel</button>
      <button onClick={save}>Save</button>
    </div>
  );
}
