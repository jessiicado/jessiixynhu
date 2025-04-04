import { useState, useEffect } from "react";
import gsap from "gsap";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".ClockLocation", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
    });
    tl.to(
      ".ClockLocation",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "+=1"
    );
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formatHours = formatTime(hours % 12 || 12);
  return (
    <section className="ClockLocation absolute bottom-[0.5rem] right-[1rem] gap-20 text-2xl lg:text-3xl 2xl:text-3xl font-gambarino font-bold justify-center text-right ">
      <div className="clock" id="clock">
        {formatHours}:{formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())} {ampm}
      </div>
      <h2>HOUSTON</h2>
    </section>
  );
};

export default Clock;
