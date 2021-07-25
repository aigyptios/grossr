import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    border: '1px solid #2b4fd6',
    padding: '5px 10px',
    background: 'transparent',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: '1px',
    color: '#2b4fd6',
    transition: 'background 300ms, color 100ms',
    position: 'relative',
    marginTop: '5px',
    marginBottom: '5px',
    '&:hover': {
      background: '#2b4fd6',
      color: '#ffffff',
    },
    '&:active, &$active': {
      background: '#5472de',
      borderColor: '#5472de',
      color: '#ffffff'
    },
    '& + &': {
      marginLeft: '10px'
    }
  },
  active: {}
})

interface IButtonProps { 
  children: ReactNode, 
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  active?: boolean
}
export default function Button({ children, onClick, active }: IButtonProps) {
  const styles = useStyles()
  return <button className={styles.button + ` ${active ? styles.active : ''}`} onClick={onClick}>{ children }</button>
}