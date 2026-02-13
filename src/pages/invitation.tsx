import ILY from "@/components/iloveyou";
import { Card } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Invitation() {
  const yehey = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  };

  useEffect(() => {
    yehey();
  }, []);

  return (
    <div className="flex flex-col justify-center p-4 h-screen gap-4">
      <Card className="p-4 h-screen justify-between items-center">
        <ILY />
        <div className="self-center text-center gap-4 flex flex-col">
          <div>
            <div className="text-2xl">i knew it!!</div>
            <div className="text-2xl">i love you so much!!</div>
            <div className="text-2xl">happy valentine's day!!</div>
          </div>
          <div className="flex-1 justify-center items-center">
            <div className="text-2xl">venue: Al fresco dining at Mr. A</div>
            <div className="text-2xl">time: reservations at 4:00 PM</div>
            <div className="text-2xl">dresscode: casual</div>
            <div className="flex flex-row flex-wrap gap-2">
              <img
                src={"/pic3.jpg"}
                alt="Valentine's Day"
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <div className="text-2xl">i will pick u up at 2 PM</div>
          <div>
            <div className="text-2xl">can't wait to see you!!</div>
            <div className="text-2xl">i love you!!</div>
          </div>
        </div>
        <ILY />
      </Card>
    </div>
  );
}
