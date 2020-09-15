import React from 'react';

import { useGlobalState } from '../contexts/GlobalState';

const FormValues = () => {
  const [state] = useGlobalState();
  console.log('FormValues');

  return (
    <div className="form-values text-xl font-medium bg-gray-200 p-3">
      <h3 className="text-gray-600">VALOR DO FORM</h3>
      <pre className="printed-obj overflow-auto">{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default FormValues;
