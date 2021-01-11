import React from 'react';
import { connect } from 'react-redux';

import PositionForm from '../position/Form';

const Form = ({ addModalOpen, dispatch, data, accounts }) => {
  return (
    <PositionForm
      data={data}
    />
  )
};

export default connect(state => ({
  data: state.addPositionFormData,
}))(Form);
