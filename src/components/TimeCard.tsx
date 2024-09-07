import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeCardProps {
  value: number;
  label: string;
}

export function TimeCard({ value, label }: Readonly<TimeCardProps>) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    if (value !== displayedValue) {
      const timer = setTimeout(() => {
        setDisplayedValue(value);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, displayedValue]);

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="relative h-[72px] w-[65px] md:w-[142px] md:h-[150px] rounded-lg overflow-hidden text-3xl md:text-7xl  shadow-xl shadow-blue-very-dark-mostly card bg-blue-very-dark ">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={displayedValue}
            initial={{
              rotateX: -90,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: 90 }}
            transition={{ duration: 0.6, ease: [0.45, 0.05, 0.55, 0.95] }}
            style={{ transformOrigin: "center center" }}
            className="h-full flex flex-col"
          >
            <div className="flex-1 flex items-end justify-center text-red-soft bg-blue-dark-desaturated  rounded-t-md font-bold border-b-[1px] border-blue-grayish">
              <p className="-mb-5 md:-mb-9">
                {displayedValue.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="flex-1 flex items-start justify-center b text-red-soft font-bold rounded-b-md bg-blue-dark-desaturated">
              <p className="-mt-4 md:-mt-9">
                {displayedValue.toString().padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.p
        className="text-[10px] md:text-sm text-blue-grayish uppercase tracking-[0.25rem] text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
