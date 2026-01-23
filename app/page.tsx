import { getAllWords } from "@/lib/words";
import HomePage from "@/components/home/HomePage";

export default async function Home() {
  const words = await getAllWords();
  return <HomePage words={words} />;
}
