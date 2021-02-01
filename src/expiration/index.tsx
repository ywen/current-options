import { connect } from 'react-redux';

import './index.scss';
import SortConditions from 'commons/SortConditions';
import tableRenderer from './tableRenderer';
import { RootState } from 'store';
import getExpirationDates from './getExpirationDates';

interface Params {
  sortConditions: SortConditions;
  dispatch: Function;
  dates: string[];
};

interface OpenDetailsParams {
  date: string;
};

const Expiration = ({ sortConditions, dates, dispatch }: Params) => {
  const table = tableRenderer({ sortConditions, stats: [], dispatch });
  const openDetails = ({ date }: OpenDetailsParams) => {
  };
  return (
    <div className='expiration-view__container authenticated__view-area'>
      <table className='expiration-view__table'>
        {table.renderTableHeaders()}
        {dates.map(date => {
          return(
            <tr className='list__tr'>
              <td className='list__td' onClick={() => openDetails({date})}>
                {date}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default connect((state: RootState) => ({
  sortConditions: state.sortConditions,
  dates: getExpirationDates(state),
}))(Expiration);
