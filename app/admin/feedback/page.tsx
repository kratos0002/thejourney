import FeedbackTab from "../components/FeedbackTab";
import { getFeedbackSubmissions, type FeedbackItem } from "../actions-feedback";

export default async function FeedbackPage() {
  let feedback: FeedbackItem[] = [];
  try {
    feedback = await getFeedbackSubmissions();
  } catch {
    feedback = [];
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <span className="text-sm text-gray-500">{feedback.length} total</span>
      </div>
      <FeedbackTab initialFeedback={feedback} />
    </div>
  );
}
