import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  elementRow: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  labelWrapper: {
    padding: '10px',
    width: '150px',
    '& label': {
      verticalAlign: 'middle',
    },
  },
  inputWrapper: {
    padding: '10px',
    flex: '1 0 0',
  },
});

interface IFormElementProps {
  label?: string;
  children: ReactNode;
}
export default function LabeledDatum({ label, children }: IFormElementProps) {
  const styles = useStyles();
  return (
    <div className={styles.elementRow}>
      <div className={styles.labelWrapper}>
        {label && <label>{label}</label>}
      </div>
      <div className={styles.inputWrapper}>
        {children}
      </div>
    </div>
  );
}