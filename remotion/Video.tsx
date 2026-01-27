import { Composition } from "remotion";
import { JourneyVideo, JourneyVideoProps } from "./JourneyVideo";
import { allWords } from "../data/words";

// Find the word "zero"
const zeroWord = allWords.find(w => w.slug === "zero");

// Instagram Reels: 1080x1920 (9:16), 30fps
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="JourneyReel"
        component={JourneyVideo}
        durationInFrames={30 * 20} // 20 seconds
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          word: zeroWord!,
        }}
      />
    </>
  );
};
