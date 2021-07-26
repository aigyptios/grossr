import { createUseStyles } from "react-jss";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import { Icon } from "./common";
import { EditCase, CaseList, ViewCase, CreateCase } from "./features/cases";
import { COLLAPSE_WIDTH_SM } from "./app/constants";

const useStyles = createUseStyles({
  header: {
    height: '50px',
    boxShadow: '0 0 4px #d3d3d3',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#ffffff',
  },
  logo: {
    color: '#144fd6',
    fontWeight: '800',
    minWidth: '200px',
    textAlign: 'center',
    height: '100%',
    fontFamily: 'Josefin Sans',
    textTransform: 'uppercase',
    fontSize: '30px',
    lineHeight: '1.8',
    textShadow: '2px 2px #a9b8ef',
  },
  accountInfo: {
    fontSize: '14px',
    padding: '12px',
    fontWeight: '800',
    borderLeft: '1px solid #d3d3d3',
    background: '#ffffff',
  },
  userName: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '5px',
    [`@media screen and (max-width: ${COLLAPSE_WIDTH_SM}px)`]: {
      display: 'none !important',
    },
  },
  main: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: 'calc(100vh - 50px)',
    [`@media screen and (max-width: ${COLLAPSE_WIDTH_SM}px)`]: {
      flexFlow: 'column',
    },
  },
  sidebar: {
    flex: '0 0 200px',
    color: '#ffffff',
    background: '#144fd6',
    paddingTop: '35px',
    [`@media screen and (max-width: ${COLLAPSE_WIDTH_SM}px)`]: {
      padding: 0,
      flexBasis: 0
    },
  },
  navIcon: {
    display: 'inline-block',
    marginRight: '15px',
  },
  navLink: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: '2px',
    fontSize: '14px',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '20px',
    width: '100%',
    borderLeft: '4px solid #144fd6',
    [`@media screen and (max-width: ${COLLAPSE_WIDTH_SM}px)`]: {
      borderLeftWidth: 0,
    },
  },
  navLinkActive: {
    background: '#5472de',
    borderLeftColor: '#ffffff'
  },
  page: {
    padding: '30px',
    flex: '1 0 0',
  },
})

export default function App() {
  const styles = useStyles();
  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.logo}>Grossr</div>
        <div className={styles.accountInfo}>
          <Icon name="person" />
          <span className={styles.userName}>Tessie Technician</span>
        </div>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <NavLink exact className={styles.navLink} activeClassName={styles.navLinkActive} to="/cases">
                  <Icon className={styles.navIcon} name="list_alt" />
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink exact className={styles.navLink} activeClassName={styles.navLinkActive} to="/cases/create">
                  <Icon className={styles.navIcon} name="playlist_add" />
                  Add Case
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <section className={styles.page}>
          <Switch>
            <Route exact path="/cases">
              <CaseList />
            </Route>
            <Route path="/cases/create">
              <CreateCase />
            </Route>
            <Route path="/case/:id">
              <Switch>
                <Route exact path={'/case/:id'}>
                  <ViewCase />
                </Route>
                <Route path={'/case/:id/edit'}>
                  <EditCase />
                </Route>
              </Switch>
            </Route>
            <Route path={["*"]} >
              <Redirect to="/cases" />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}