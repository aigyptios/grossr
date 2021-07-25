import { ReactNode } from "react";
import { createUseStyles } from "react-jss";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from ".";

const useStyles = createUseStyles({
  link: {
    color: '#0e4b5d',
    textDecoration: 'none',
  },
  navigation: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: '2px',
    fontSize: '14px',
  }
})

interface ILinkProps {
  children: ReactNode,
  navigation?: boolean,
  href?: string,
  to?: string
}

export default function Link({children, navigation, href, to = "/"}: ILinkProps) {

  const styles = useStyles();
  const classes = styles.link + (navigation ? ' ' + styles.navigation : '');

  if (href) {
    return <a href={href} className={classes}>{children} <Icon name="launch"/></a>
  } else {
    return <RouterLink className={classes} to={to}>{children}</RouterLink>
  }
}