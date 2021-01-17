import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import List from './List';
import Expiration from './expiration';
import ByStock from './ByStock';
import ClosedPositionsSummary from './ClosedPositions/Summary';
import ClosedPositionsList from './ClosedPositions/List';
import AuthenticatedArea from './AuthenticatedArea';

const Routing = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn user={user}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<AuthenticatedArea user={user} />}>
          <Route path="/list" element={<List />} />
          <Route path="/expiration" element={<Expiration />} />
          <Route path="/by_stock" element={<ByStock />} />
          <Route path="/closed_positions_summary" element={< ClosedPositionsSummary />} />
          <Route path="/closed_positions" element={< ClosedPositionsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
