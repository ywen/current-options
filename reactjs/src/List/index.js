import React from 'react';
import { connect } from 'react-redux';

import getLabel from '../commons/getLabel';

const renderBody = ({ positions }) => {
  console.log('in nody ' + positions.size)
  if (positions.size === 0) {
    return false;
  }
  console.log('in after frdt ' + positions.size)
  const trs = []
  for (let position of positions) {
    const tr = <tr></tr>;
    console.log(position.toJS());
    const tds = [];
    position.entrySeq().forEach((v, k) => {
      const td = <td key={`td-${k}`}>{v}</td>;
      tds.push(td);
    });
    return tds;
  };
  return trs;
};

const renderHeaders = ({ positions }) => {
  console.log('in position  ' + positions.size)
  if (positions.first()) {
    const ths = [];
    const position = positions.first();
    position.keySeq().forEach((k) => {
      const th = <th key={`th-${k}`}>{getLabel({name: k})}</th>;
      ths.push(th);
    });
    return ths;
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
