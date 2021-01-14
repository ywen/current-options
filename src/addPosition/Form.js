import React from 'react';
import { connect } from 'react-redux';

import PositionForm from '../position/Edit/Form';

const Form = ({ modalData }) => <PositionForm modalData={modalData} />;

export default connect(state => ({
  modalData: state.addPositionFormData,
}))(Form);
