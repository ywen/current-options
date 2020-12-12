import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';

import './index.scss';

const renderTd = ({position}) => {
  const tds = []
  position.map((v, k) => {
    const td = <td key={`td-${k}`}>{v}</td>;
    tds.push(td);
  });
  return tds;
};

const renderBody = ({ positions }) => {
  if (positions.size === 0) {
    return false;
  }
  const r = positions.map((position, index) => {
    return <tr key={`position-tr-${index}`}>{renderTd({position})}</tr>
  });
  return r.toJS();
};

const renderHeaders = ({ positions }) => {
  if (positions.first()) {
    const position = positions.first();
    return position.keySeq().map((k) => {
      return <th key={`th-${k}`}>{getLabel({name: k})}</th>;
    });
  } else {
    return false;
  }
};

const List = ({ positions }) => {
  return (
    <table className='list__container'>
      <thead>
        <tr>
          {renderHeaders({ positions })}
        </tr>
      </thead>
      <tbody>
        {renderBody({ positions })}
      </tbody>
    </table>
  )
};

export default connect(state => ({
  positions: state.positions,
}))(List);
