import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardStats } from '../redux/dashboardSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading) return <p>Loading dashboard data...</p>;
  if (error) return <p>Error loading stats: {error}</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-xl">{stats.totalUsers}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-bold">Active Products</h2>
          <p className="text-xl">{stats.activeProducts}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-bold">Reports Filed</h2>
          <p className="text-xl">{stats.totalReports}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
