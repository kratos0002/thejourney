import { getWords } from "./actions";
import WordList from "./components/WordList";

export default async function AdminPage() {
  const words = await getWords();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Words</h1>
        <span className="text-sm text-gray-500">{words.length} total</span>
      </div>
      <WordList words={words} />
    </div>
  );
}
