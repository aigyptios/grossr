import { createUseStyles } from "react-jss"

interface IIconProps {
  name: string,
  className?: string
}

const useStyles = createUseStyles({
  icon: {
    verticalAlign: 'middle'
  }
})

export default function Icon({name, className: classNames}: IIconProps) {
  const { icon } = useStyles();
  return <span className={"material-icons-round " + (classNames ? `${classNames} ` : ' ') + icon}>{name}</span>
}