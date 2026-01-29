import { getAllWords } from "@/lib/words";
import CabinetPage from "@/components/cabinet/CabinetPage";

export const metadata = {
  title: "Your Cabinet — The Journey",
  description: "A personal collection of explored words and their etymological journeys.",
};

export default async function Cabinet() {
  const words = await getAllWords();
  return <CabinetPage words={words} />;
}
