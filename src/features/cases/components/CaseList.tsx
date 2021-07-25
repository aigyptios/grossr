import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { ECaseStatus, ICase } from "../../../types";
import { PageHeading, Card, Button } from "../../../common";
import CaseActions from "./CaseActions";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import { COLLAPSE_WIDTH_MD } from "../../../app/constants";


const useStyles = createUseStyles({
  table: {
    width: 'calc(100% + 20px)',
    textAlign: 'left',
    marginLeft: '-10px',
    marginRight: '-10px',
    borderCollapse: 'collapse',
    '& td, & th': {
      padding: '5px',
      borderBottom: '1px solid #dddddd',
    },
    '& td:first-child, th:first-child': {
      paddingLeft: '20px',
      textAlign: 'left',
    },
    '& td:last-child, th:last-child': {
      paddingRight: '20px',
      textAlign: 'right',
    },
    '& tr:hover': {
      background: '#efefef'
    },
    [`& td:nth-child(3),
    & td:nth-child(4),
    & td:nth-child(5),
    & td:nth-child(6),
    & td:nth-child(7),
    & td:nth-child(9),
    & th:nth-child(3),
    & th:nth-child(4),
    & th:nth-child(5),
    & th:nth-child(6),
    & th:nth-child(7),
    & th:nth-child(9)`]: {
      [`@media screen and (max-width: ${COLLAPSE_WIDTH_MD}px)`]: {
        display: 'none'
      }
    }
  },
  actionColumn: {
    textAlign: 'right'
  },
  filters: {
    marginBottom: '10px',
  }
});

const filters = {
  [ECaseStatus.CREATED]: (c: ICase) => c.status === ECaseStatus.CREATED,
  [ECaseStatus.SUBMITTED]: (c: ICase) => (c.status === ECaseStatus.SUBMITTED || c.status === ECaseStatus.RESUBMITTED),
  [ECaseStatus.RESUBMITTED]: (c: ICase) => (c.status === ECaseStatus.SUBMITTED || c.status === ECaseStatus.RESUBMITTED),
  [ECaseStatus.REJECTED]: (c: ICase) => c.status === ECaseStatus.REJECTED,
  [ECaseStatus.APPROVED]: (c: ICase) => c.status === ECaseStatus.APPROVED,
}

export default function CaseList() {
  const history = useHistory();
  const cases = useAppSelector(state => state.cases.cases);
  const [filter, setFilter] = useState<ECaseStatus | undefined>();
  const styles = useStyles();

  const casesToDisplay = filter ? cases.filter(filters[filter]) : cases;

  const goTo = (path: string) => {
    history.push(path);
  }

  return (<>
    <PageHeading>Cases</PageHeading>
    <div className={styles.filters}>
      <Button active={filter === undefined} onClick={() => setFilter(undefined)}>All</Button>
      <Button active={filter === ECaseStatus.CREATED} onClick={() => setFilter(ECaseStatus.CREATED)}>Active</Button>
      <Button active={filter === ECaseStatus.SUBMITTED} onClick={() => setFilter(ECaseStatus.SUBMITTED)}>Submitted</Button>
      <Button active={filter === ECaseStatus.REJECTED} onClick={() => setFilter(ECaseStatus.REJECTED)}>Rejected</Button>
      <Button active={filter === ECaseStatus.APPROVED} onClick={() => setFilter(ECaseStatus.APPROVED)}>Approved</Button>
    </div>
    <Card>
      <>
      { casesToDisplay.length ? 
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Status</th>
              <th>Specimen</th>
              <th className={styles.actionColumn}>Actions</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {casesToDisplay.map((c: ICase, i) => (
              <tr key={i}>
                <td><Button onClick={() => goTo(`/case/${c.id}`)}>View</Button></td>
                <td>{c.id}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.dob}</td>
                <td>{ECaseStatus[c.status]}</td>
                <td>{c.images.length}</td>
                <td className={styles.actionColumn}>
                  <CaseActions whichCase={c}/>
                </td>
                <td>{new Date(c.meta.lastUpdated || c.meta.created).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      :
        <p>No cases to display.</p>
      }
      </>
    </Card>
  </>);
}
