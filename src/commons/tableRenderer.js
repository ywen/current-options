import getLabel from '../commons/getLabel';
import getSortableClassNames from '../commons/getSortableClassNames';

const initialize = ({
  prefix,
  sortConstant,
  dispatch,
  list,
  ths,
  sortConditions,
  singleKey='id',
  extra={},
}) => {
  const sort = ({ name }) => {
    if (name !== 'Actions') {
      dispatch({ type: sortConstant, field: name });
    }
  };

  const renderIndividual = ({s, extra, fields, dispatch}) => {
    const fieldTds = fields.map((field) => {
      if(s.hasOwnProperty(field)) {
        return (
          <td key={`td-${s.id}-${field}`} className='list__td'>
            {s[field]}
          </td>
        );
      } else {
        if (extra[field]) {
          return extra[field]({ s, dispatch });
        } else {
          return false;
        }
      }
    });
    return (
      <tr className='list__tr' key={`list__tr--${s[singleKey]}`}>
        { fieldTds }
      </tr>
    );
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
      result.push(renderIndividual({ s, fields: ths, extra, dispatch }));
    });
    return <tbody className={`${prefix}__tbody`}>{result}</tbody>;
  }

  return {
    renderTableHeaders,
    renderTbody,
  }
}
export default initialize;
