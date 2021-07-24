import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { EditCase, CaseList, ViewCase, CreateCase } from "./features/cases";

export default function App() {
   
  return (
    <Router>
      <header>Header here</header>
      <div>Sidebar Here</div>
      <Switch>
        <Route path="/cases">
          <CaseList />
        </Route>
        <Route path="/case/create">
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
    </Router>
  );
}