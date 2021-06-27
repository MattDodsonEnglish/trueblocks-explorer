import { Transaction } from '@modules/types';
import React from 'react';

export const AccountGas = ({ record }: { record: Transaction }) => {
  return <div>{JSON.stringify(record, null, 2)}</div>;
};

// export const neighborSchema: ColumnsType<Transaction> = [
//   addNumColumn({
//     title: 'Block Number',
//     dataIndex: 'blockNumber',
//     configuration: {
//       width: 100,
//     },
//   }),
//   addNumColumn({
//     title: 'Transaction ID',
//     dataIndex: 'transactionIndex',
//     configuration: {
//       width: 100,
//     },
//   }),
//   addColumn({
//     title: 'From',
//     dataIndex: 'from',
//     configuration: {
//       width: 150,
//     },
//   }),
//   addColumn({
//     title: 'To',
//     dataIndex: 'to',
//     configuration: {
//       width: 150,
//     },
//   }),
//   addNumColumn({
//     title: 'Ether',
//     dataIndex: 'ether',
//     configuration: {
//       width: 100,
//     },
//   }),
//   addColumn({
//     title: 'Function',
//     dataIndex: 'compressedTx',
//   }),
// ];