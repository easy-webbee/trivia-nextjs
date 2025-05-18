import React from "react";

interface CircularTimerProps {
  timer: number;
  maxTime: number;
}

export const CircularTimer = ({ timer, maxTime }: CircularTimerProps) => {
  const radius = 18;
  const stroke = 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = Math.max(timer / maxTime, 0);
  const strokeDashoffset = circumference - progress * circumference;

  const showFullRed = timer === 0;

  return (
    <div className="relative w-12 h-12">
      <svg height="100%" width="100%" viewBox="0 0 40 40">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="20"
          cy="20"
        />
        <circle
          stroke={showFullRed ? "#ef4444" : timer <= 5 ? "#ef4444" : "#3b82f6"}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={showFullRed ? 0 : strokeDashoffset}
          r={normalizedRadius}
          cx="20"
          cy="20"
          className="transition-all duration-300 ease-linear"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-muted-foreground">
        {timer}s
      </div>
    </div>
  );
};
