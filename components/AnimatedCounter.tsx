"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-4">
      <CountUp
        duration={1.75}
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
