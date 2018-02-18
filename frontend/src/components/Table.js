import React from 'react';
import { Table as BSTable } from 'react-bootstrap';

import { FormattedNumber } from '../common';
import { TableHeaders } from '../ordering';

const Table = ({ headerColumns, ordering, toggleOrdering, children }) => {
  return (
    <BSTable striped bordered condensed hover>
      <thead>
        <tr>
          <TableHeaders columns={headerColumns}
                        ordering={ordering}
                        toggleOrdering={toggleOrdering} />
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </BSTable>
  );
};

const TextCell = ({ children }) => (
  <td className="text-left">{children}</td>
);

const RightCell = ({ children }) => (
  <td className="text-right">{children}</td>
);

const NumberCell = ({ number }) => (
  <td className="text-right">
    <FormattedNumber number={number} />
  </td>
);

export default Table;
export { TextCell, RightCell, NumberCell };