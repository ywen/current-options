import React, { useState } from 'react';
import { connect } from 'react-redux';

import Immutable from 'immutable';

import './Menu.scss';

import openModal from './addPosition/openModal';
import savePosition from './position/save';
import getCSVArrayFromFile from './commons/getCSVArrayFromFile';

import auth from './server/auth';

const signOut = () => auth().signOut();

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
      <button className='menu__item menu__addPosition' onClick={() => openModal({ dispatch })}>
        Add Position
      </button>
      <div className="menu__item">
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
      <button onClick={signOut} className='menu__item menu__signOut' key='signout'>Sign Out</button>
    </div>
  )
};

export default connect(state => ({}))(Menu);
