import { createUseStyles } from "react-jss"

interface IIconProps {
  name: string
}

const useStyles = createUseStyles({
  icon: {
    verticalAlign: 'middle'
  }
})

export default function Icon({name}: IIconProps) {
  const { icon } = useStyles();
  return <span className={"material-icons-round " + icon}>{name}</span>
}