"use client";

import { ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  title: string;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T extends { id: string | number }> {
  loading?: boolean;

  columns?: Column<T>[] | string[];

  data?: T[];

  children?: ReactNode;

  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export default function DataTable<T extends { id: string | number }>({
  loading = false,
  columns = [],
  data = [],
  children,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center text-gray-400">
        Loading...
      </div>
    );
  }

  // Legacy mode (used by your admin pages)
  if (children) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900">
        <table className="min-w-full">
          <thead className="bg-neutral-800">
            <tr>
              {(columns as string[]).map((column) => (
                <th
                  key={column}
                  className="px-6 py-4 text-left text-sm font-semibold text-yellow-400"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>{children}</tbody>
        </table>
      </div>
    );
  }

  // Modern mode
  const typedColumns = columns as Column<T>[];

  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900">
      <table className="min-w-full">
        <thead className="bg-neutral-800">
          <tr>
            {typedColumns.map((column) => (
              <th
                key={String(column.key)}
                className="px-6 py-4 text-left text-sm font-semibold text-yellow-400"
              >
                {column.title}
              </th>
            ))}

            {(onEdit || onDelete) && (
              <th className="px-6 py-4 text-right text-sm font-semibold text-yellow-400">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={typedColumns.length + 1}
                className="py-10 text-center text-gray-400"
              >
                No records found.
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className="border-t border-neutral-800 hover:bg-neutral-800/40"
              >
                {typedColumns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4"
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key] ?? "")}
                  </td>
                ))}

                {(onEdit || onDelete) && (
                  <td className="space-x-2 px-6 py-4 text-right">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="rounded bg-blue-600 px-3 py-1 text-white"
                      >
                        Edit
                      </button>
                    )}

                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="rounded bg-red-600 px-3 py-1 text-white"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
