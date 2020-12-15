import React, { useState } from 'react';
import { connect } from 'react-redux';

import Immutable from 'immutable';

import './Menu.scss';
import openModal from './addPosition/openModal';
import savePosition from './addPosition/savePosition';
import getCSVArrayFromFile from './commons/getCSVArrayFromFile';

const Menu = ({ dispatch }) => {
  const [ file, setFile ] = useState(null);

  const importCSV = async () => {
    const data = await getCSVArrayFromFile({ file });
    for (let i = 0; i < data.length; i++) {
      try {
        await savePosition({ data: Immutable.fromJS(data[i]) });
      } catch(e) {
        console.error(e)
      }
    }
  };

  return (
    <div className='menu-container'>
      <button className='menu-item menu-item__addPosition' onClick={() => openModal({ dispatch })}>
        Add a Position
      </button>
      <div className="menu-item">
        <label htmlFor="upload">Import CSV</label>
        <input
          type="file"
          id='upload'
          accept=".csv"
          onChange={(e) => {setFile(e.target.files[0]) }}
          required
        />
        <button disabled={!file} onClick={importCSV}>Import</button>
      </div>
    </div>
  )
};

export default connect(state => ({}))(Menu);
