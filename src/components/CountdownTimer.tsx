import { useCountdown } from "../hooks/useCountdown";
import { formatTimeLeft } from "../utils";
import { TimeCard } from "./TimeCard";

const INITIAL_SECONDS = 60 * 60 * 24 * 14; // 14 days

export default function CountdownTimer() {
  const { timeLeft } = useCountdown(INITIAL_SECONDS);
  const { days, hours, minutes, secs } = formatTimeLeft(timeLeft);

  return (
    <div className={`relative w-64 h-32 perspective`}>
      <div className="flex flex-row items-center justify-center gap-8">
        <TimeCard value={days} label="days" />
        <TimeCard value={hours} label="hours" />
        <TimeCard value={minutes} label="minutes" />
        <TimeCard value={secs} label="seconds" />
      </div>
    </div>
  );
}
