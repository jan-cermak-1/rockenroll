import React from 'react';
import './Table.css';

export interface TableColumn<T = any> {
  key: string;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  className?: string;
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
  striped = false,
  bordered = false,
  hoverable = true,
  compact = false,
  className = '',
}: TableProps<T>) {
  const classNames = [
    'soul-table',
    striped && 'soul-table--striped',
    bordered && 'soul-table--bordered',
    hoverable && 'soul-table--hoverable',
    compact && 'soul-table--compact',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="soul-table-wrapper">
      <table className={classNames}>
        <thead className="soul-table__head">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="soul-table__header"
                style={{
                  width: column.width,
                  textAlign: column.align || 'left',
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="soul-table__body">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="soul-table__row">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="soul-table__cell"
                  style={{ textAlign: column.align || 'left' }}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="soul-table__empty">No data available</div>
      )}
    </div>
  );
}

