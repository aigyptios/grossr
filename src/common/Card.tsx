import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    boxShadow: '0 0 4px #d3d3d3',
    borderRadius: '3px',
    padding: '10px',
    background: '#ffffff'
  }
})

interface ICardProps { children: ReactNode}
export default function Card({ children }: ICardProps) {
  const styles = useStyles();
  return <div className={styles.card}>{children}</div>
}
