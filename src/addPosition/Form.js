import React from 'react';
import { connect } from 'react-redux';

import PositionForm from '../position/Edit/Form';

const Form = ({ dispatch, data }) => {
  return (
    <PositionForm
      data={data}
    />
  )
};

export default connect(state => ({
  data: state.addPositionFormData,
}))(Form);
