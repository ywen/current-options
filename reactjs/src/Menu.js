import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    <div className='authenticated__menu-container'>
      <button className='authenticated__menu authenticated__addPosition' onClick={() => openModal({ dispatch })}>
        Add a Position
      </button>
      <div className="authenticated__menu">
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
      <Link className='authenticated__menu' to="/list">List View</Link>
      <Link className='authenticated__menu' to="/expiration">Expiration View</Link>
      <button onClick={signOut} className='authenticated__menu authenticated__signout' key='signout'>Sign Out</button>
    </div>
  )
};

export default connect(state => ({}))(Menu);
