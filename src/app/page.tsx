import { HeroStory } from "@/components/home/HeroStory";
import { StoryProgress } from "@/components/home/StoryProgress";
import { StoryReel } from "@/components/home/StoryReel";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { CapabilityOrbit } from "@/components/home/CapabilityOrbit";
import { WorkPreview } from "@/components/home/WorkPreview";
import { FinaleCTA } from "@/components/home/FinaleCTA";

export default function Home() {
  return (
    <>
      <StoryProgress />
      <HeroStory />
      <MarqueeStrip />
      <StoryReel />
      <CapabilityOrbit />
      <WorkPreview />
      <FinaleCTA />
    </>
  );
}
