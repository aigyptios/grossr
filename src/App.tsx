import { createUseStyles } from "react-jss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Icon, Link } from "./common";
import { EditCase, CaseList, ViewCase, CreateCase } from "./features/cases";

const useStyles = createUseStyles({
  header: {
    height: '50px',
    background: '#ffffff',
    boxShadow: '0 0 4px #d3d3d3',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    background: '#4abbcf',
    color: '#ffffff',
    fontWeight: '800',
    width: '200px',
    textAlign: 'center',
    height: '100%',
    fontFamily: 'Josefin Sans',
    textTransform: 'uppercase',
    fontSize: '30px',
    lineHeight: '1.8',
    textShadow: '2px 2px rgb(16 74 92 / 34%)',
  },
  accountInfo: {
    fontSize: '14px',
    padding: '12px',
    fontWeight: '800',
    borderLeft: '1px solid #d3d3d3',
  },
  main: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: 'calc(100vh - 50px)',
  },
  sidebar: {
    flex: '0 0 200px',
    color: '#ffffff',
    background: '#0e4b5d'
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
          <Icon name="person" /> Tessie Technician
        </div>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <Icon name="list_alt" />
                <Link navigation to="/cases">Cases</Link>
              </li>
              <li>
                <Icon name="playlist_add" />
                <Link navigation to="/cases/create">Add Case</Link>
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