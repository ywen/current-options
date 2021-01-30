import { connect, ConnectedProps } from 'react-redux';

import './index.scss';
import SortConditions from 'commons/SortConditions';
import tableRenderer from './tableRenderer';
import { RootState } from 'store';

interface Params {
  sortConditions: SortConditions;
  dispatch: Function;
};

const Expiration = ({ sortConditions, dispatch }: Params) => {
  const table = tableRenderer({ sortConditions, stats: [], dispatch });
  return (
    <div className='expiration-view__container authenticated__view-area'>
      {table.renderTableHeaders()}
    </div>
  );
};

export default connect((state: RootState) => ({
  sortConditions: state.sortConditions,
}))(Expiration);
