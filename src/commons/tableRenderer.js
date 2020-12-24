import getLabel from '../commons/getLabel';
import getSortableClassNames from '../commons/getSortableClassNames';

const initialize = ({
  prefix,
  sortConstant,
  renderIndividual,
  dispatch,
  list,
  ths,
  sortConditions,
}) => {
  const sort = ({ name }) => {
    if (name !== 'Actions') {
      dispatch({ type: sortConstant, field: name });
    }
  };

  const renderTh = (name) => {
    const classNames = getSortableClassNames({
      prefix,
      sortConditions,
      field: name,
    });
    return (
      <th
        className={classNames}
        onClick={() => sort({ name })}
        key={`${prefix}-${name}-th`}
      >
        {getLabel({ name })}
      </th>
    )
  };

  const renderTableHeaders = () => {
    return (
      <thead className={`${prefix}__thead`}>
        <tr className={`${prefix}__tr-head`}>
          { ths.map(renderTh) }
        </tr>
      </thead>
    );
  };

  const renderTbody = () => {
    const result = [];
    list.forEach((s) => {
      result.push(renderIndividual({ s, dispatch }));
    });
    return result;
  }

  return {
    renderTableHeaders,
    renderTbody,
  }
}
export default initialize;
