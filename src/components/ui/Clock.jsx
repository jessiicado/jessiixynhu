import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formatHours = formatTime(hours % 12 || 12);
  return (
    <section className="ClockLocation fixed bottom-[1rem] right-[1rem] gap-20 text-5xl font-new justify-center ">
      <div className="clock" id="clock">
        {formatHours}:{formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())} {ampm}
      </div>
      <h2>HOUSTON</h2>
    </section>
  );
};

export default Clock;
