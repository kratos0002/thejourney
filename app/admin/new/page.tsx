import WordForm from "../components/WordForm";
import { createWord } from "../actions";

export default function NewWordPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Word</h1>
      <WordForm action={createWord} />
    </div>
  );
}
