import React from 'react';
import FormReg from '../ui/FormReg';

export default function Registration() {
  return (
    <div
      className="form-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormReg />
    </div>
  );
}
