import React, { useEffect, useState } from "react";
function Timer() {

  const [timer, settimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const datefunction = () => {
    
    const today = new Date().getTime() + (new Date().getTimezoneOffset()*60000 + 36000000)
    const endDay = "1/1/2025 00:00:00";
    const finalDay = new Date(endDay).getTime();
    const difference = finalDay - today;

    const days = Math.floor(difference /(1000*60*60*24));
    const hours = Math.floor((difference / (1000*60*60)) % 24);
    const minutes = Math.floor((difference / (1000*60))%60);
    const seconds = Math.floor((difference/ 1000)%60);

    const daysRemain = days > 9 ? days : "0" + days;
    const hoursRemain = hours > 9 ? hours : "0" + hours;
    const minutesRemain = minutes > 9 ? minutes : "0" + minutes;
    const secondsRemain = seconds > 9  ? seconds : "0" + seconds;

    if(difference > 0){
    settimer({
      days: daysRemain,
      hours: hoursRemain,
      minutes: minutesRemain,
      seconds: secondsRemain,
    })};
  };

  useEffect(() => {
    setInterval(datefunction, 1000);
  }, []);

  return (
    <ul className="list-unstyled d-flex gap-4 justify-content-center mb-0 pb-3">
      <li>
        <span>{timer.days}</span>
        <p>Days</p>
      </li>
      <li>
        <span>{timer.hours}</span>
        <p>Hours</p>
      </li>
      <li>
        <span>{timer.minutes}</span>
        <p>Minutes</p>
      </li>
      <li>
        <span>{timer.seconds}</span>
        <p>Seconds</p>
      </li>
    </ul>
  );
}

export default Timer;
