import { Account } from '@components/Account';

import React, { useEffect, useState } from 'react';
import useGlobalState from '../../../..//state';

export const AccountsView = () => {
  const { accountAddresses } = useGlobalState();
  return (
    <div>
      {accountAddresses.map((address: string) => (
        <div>
          <Account initAddress={address} />
        </div>
      ))}
    </div>
  );
};
