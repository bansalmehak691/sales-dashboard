import { SalesData } from "@/types/sales";

interface SalesTableProps {
  data: SalesData[];
}

export default function SalesTable({ data }: SalesTableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Monthly Sales
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Sales data after applying the selected threshold.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 font-semibold text-gray-700">
                Month
              </th>

              <th className="px-5 py-3 font-semibold text-gray-700">
                Sales
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.month}
                className="border-t border-gray-100"
              >
                <td className="px-5 py-3 text-gray-700">
                  {item.month}
                </td>

                <td className="px-5 py-3 font-medium text-gray-900">
                  ₹{item.sales.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}