import { useState } from "react";
import { IAnnotatedImage, IAnnotation } from "../../../types";
import Annotation from 'react-image-annotation';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  annotationWrapper: {
    marginBottom: '0px',
    transition: 'margin 300ms',
    background: '#dddddd',
    borderRadius: '3px',
    border: '1px solid #ddd',
    '&:hover': {
      marginBottom: '150px',
    }
  },
  annotationWrapperActive: {
    marginBottom: '150px'
  }
})

interface ISpecimenImageProps {
  image: IAnnotatedImage;
  onSubmit?: (arg0: IAnnotation) => void
}
export default function SpecimenImage({ image, onSubmit }: ISpecimenImageProps) {

  const [currentAnnotation, setCurrentAnnotation] = useState<IAnnotation | any>({});
  const styles = useStyles();
  
  const submit = (annotation: IAnnotation) => {
    onSubmit!(annotation);
    setCurrentAnnotation({});
  };

  return (
    <div className={`${styles.annotationWrapper} ${currentAnnotation.geometry ? styles.annotationWrapperActive : ''}`}>
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
    </div>
  );
}
