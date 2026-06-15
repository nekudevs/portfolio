import { Tamagotchi } from "@/components/tamagotchi";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Tamagotchi",
  description: "Play with my pixel pet!",
};

export default function TamagotchiPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Take care of my code pet!
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Stats decay over time, even when you log off! Feel free to stop by and check in on how they&apos;re doing.
          </p>
        </div>
      </BlurFade>
      
      <BlurFade delay={0.2}>
        <Tamagotchi />
      </BlurFade>
    </section>
  );
}
