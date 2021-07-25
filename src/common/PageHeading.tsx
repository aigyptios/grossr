import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  heading: {
    marginBottom: '15px',
    color: '#0e4b5c',
  }
})

interface IHeadingProps { children: ReactNode; }
export default function PageHeading({ children }: IHeadingProps) {
  const styles = useStyles();
  return <h1 className={styles.heading}>{children}</h1>;
}
