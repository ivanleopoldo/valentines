import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Question() {
  const navigate = useNavigate();
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setPos({ x, y });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="text-4xl md:text-6xl">will u be my valentine?</div>

      <div className="flex flex-col justify-evenly items-center gap-2 w-full h-1/2">
        <img src={"/please.gif"} alt="Please" className="h-full" />

        <div className="relative gap-2 flex md:w-1/4 w-1/2 justify-center">
          <Button
            onClick={() => navigate("/invitation")}
            className="motion-preset-oscillate"
          >
            yes
          </Button>

          <Button
            onMouseEnter={moveNoButton}
            onClick={() => moveNoButton()}
            className="
                flex-1
                absolute
                motion-preset-oscillate
                motion-safe:transition-transform
                duration-300
              "
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
          >
            no
          </Button>
        </div>
      </div>
    </div>
  );
}
