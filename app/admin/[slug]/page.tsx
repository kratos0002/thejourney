import { notFound } from "next/navigation";
import WordForm from "../components/WordForm";
import { getWord, updateWord } from "../actions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditWordPage({ params }: PageProps) {
  const { slug } = await params;
  const word = await getWord(slug);

  if (!word) {
    notFound();
  }

  async function handleUpdate(formData: FormData) {
    "use server";
    return updateWord(slug, formData);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Edit: {word.romanization}
      </h1>
      <WordForm word={word} action={handleUpdate} />
    </div>
  );
}
