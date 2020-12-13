import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';

import modelField from '../position/model';

import { Link } from "react-router-dom";

import './index.scss';

const renderTd = ({position}) => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
  return fields.map((field) => {
    return (
      <td key={`td-${field}`} className='list__td'>
        {position.get(field)}
      </td>
    );
  });
};

const renderBody = ({ positions }) => {
  if (positions.size === 0) {
    return false;
  }
  const r = positions.map((position, index) => {
    return <tr key={`position-tr-${index}`} className='list__tr'>{renderTd({position})}</tr>
  });
  return r.toJS();
};

const renderHeaders = () => {
  const fields = modelField.metaFields.concat(modelField.inferredFields);
  return fields.map((k) => {
    return <th key={`th-${k}`} className='list__th'>{getLabel({name: k})}</th>;
  });
};

const List = ({ positions }) => {
  return (
    <div className='list__container'>
      <table className='list__table'>
        <thead className='list__thead'>
          <tr>
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>
          {renderBody({ positions })}
        </tbody>
      </table>
    </div>
  )
};

export default connect(state => ({
  positions: state.positions,
}))(List);
