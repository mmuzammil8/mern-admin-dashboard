import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../redux/reportsSlice';

function ReportsPage() {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector(state => state.reports);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  useEffect(() => {
    setFilteredReports(
      reports.filter(report =>
        report.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, reports]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>

      <input
        type="text"
        placeholder="Search reports..."
        className="mb-4 p-2 border rounded w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading reports...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && filteredReports.length === 0 && <p>No reports found.</p>}

      {!loading && filteredReports.length > 0 && (
        <div className="space-y-4">
          {filteredReports.map(report => (
            <div key={report._id} className="p-4 border rounded bg-white shadow">
              <h2 className="text-xl font-bold">{report.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {new Date(report.createdAt).toLocaleDateString()} · {report.reportType}
              </p>
              <p className="mb-2">{report.content}</p>
              <span
                className={`inline-block px-2 py-1 text-sm rounded ${
                  report.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : report.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {report.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportsPage;
