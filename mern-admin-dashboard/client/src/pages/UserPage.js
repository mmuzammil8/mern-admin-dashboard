import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';

function UsersPage() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {!loading && users.length > 0 && (
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b capitalize">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersPage;
