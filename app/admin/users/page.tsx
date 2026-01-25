import { getUsers, getUserStats } from "../actions-users";
import UsersTab from "../components/UsersTab";

export default async function UsersPage() {
  const [users, stats] = await Promise.all([getUsers(), getUserStats()]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
      </div>
      <UsersTab users={users} stats={stats} />
    </div>
  );
}
