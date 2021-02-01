import SortConditions from 'commons/SortConditions';
import TableRenderer from 'commons/tableRenderer';
import StatsType from './StatsType';

interface Params {
  dispatch: Function;
  sortConditions: SortConditions;
  stats: StatsType[];
};

const tableRenderer = ({ sortConditions, dispatch, stats }: Params) => (
  TableRenderer({
    sortConditions,
    sortConstant: 'SORT_IN_EXPIRATION_VIEW',
    dispatch,
    list: stats,
    singleKey: 'expirationDate',
    prefix: 'expiration-view',
    ths: [
      'expirationDate',
      'occupied',
      'potential',
      'occupiedPercentage',
      'potentialPercentage',
    ],
  })
);

export default tableRenderer;
