import { useState } from "react";
import { IAnnotatedImage } from "../../../types";
import Annotation, { IAnnotation } from 'react-image-annotation';

interface ISpecimenImageProps {
  image: IAnnotatedImage;
  onSubmit?: (arg0: IAnnotation) => void
}
export default function SpecimenImage({ image, onSubmit }: ISpecimenImageProps) {

  const [currentAnnotation, setCurrentAnnotation] = useState<IAnnotation | any>({});
  
  const submit = (annotation: IAnnotation) => {
    onSubmit!(annotation);
    setCurrentAnnotation({});
  };

  return (
    <Annotation
      src={image.src}
      alt={image.alt}
      annotations={image.annotations || []}
      value={currentAnnotation}
      allowTouch={true}
      onChange={setCurrentAnnotation}
      onSubmit={onSubmit ? submit : undefined} 
      disableAnnotation={!onSubmit}
      disableOverlay={!onSubmit}
    />
  );
}
