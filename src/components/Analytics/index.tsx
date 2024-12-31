import { Columns } from "../../types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AnalyticsProps {
  columns: Columns;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">Books: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const Analytics = ({ columns }: AnalyticsProps) => {
  // Transform data for the chart
  const chartData = Object.entries(columns).map(([columnId, column]) => ({
    name: column.name,
    Books: column.items.length,
  }));

  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">Reading Progress Analytics</h2>
      <div className="w-full h-[400px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Books" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-4">{column.name}</h3>
            <div className="space-y-2">
              {column.items.map(book => (
                <div key={book.id} className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">{book.bookName}</p>
                  <p className="text-sm text-gray-600">by {book.authorName}</p>
                  <p className="text-sm text-gray-600">{book.pageNumbers} pages</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
