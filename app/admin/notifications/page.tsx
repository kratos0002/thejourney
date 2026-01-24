import NotificationsTab from "../components/NotificationsTab";
import { getNotifications, type NotificationItem } from "../actions-notifications";

export default async function NotificationsPage() {
  let notifications: NotificationItem[] = [];
  try {
    notifications = await getNotifications();
  } catch {
    notifications = [];
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      </div>
      <NotificationsTab initialNotifications={notifications} />
    </div>
  );
}
