import { Loading } from '@components/Loading';
import { createErrorNotification } from '@modules/error_notification';
import React, { useCallback } from 'react';
import { useCommand } from '../../../hooks/useCommand';

export const Blocks = () => {
  const [data, loading] = useCommand('blocks', { blocks: 'latest', hashes: true, cache: true });
  const getData = useCallback((response) => (response.status === 'fail' ? [] : response.data), []);

  const theItem = getData(data);
  if (data.status === 'fail') {
    createErrorNotification({
      description: 'Could not fetch block',
    });
  }

  return (
    <Loading loading={loading}>
      <pre>{JSON.stringify(theItem, null, 2)}</pre>
    </Loading>
  );
};
