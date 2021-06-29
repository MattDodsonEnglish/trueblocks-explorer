import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useGlobalState from '../../state';

export const renderNamedAddress = (record: any, location: string) => {
  const history = useHistory();
  const { accountAddresses, setAccountAddresses } = useGlobalState();
  return (
    <div>
      <div>{record.name === '' ? <div style={{ fontStyle: 'italic' }}>not named</div> : record.name}</div>
      <div
        style={{ color: '#1890ff', cursor: 'pointer' }}
        onClick={() => {
          setAccountAddresses([...accountAddresses, record.address]);
          history.push(location);
        }}>
        {record.address}
      </div>
    </div>
  );
};
