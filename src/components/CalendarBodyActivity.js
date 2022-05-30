import { useState } from "react";
import CalendarBodyDayHours from "./CalendarBodyDayHours";
import CalendarBodyDayInfo from "./CalendarBodyDayInfo";

export default function CalendarBodyActivity({ close, classes, activity }) {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    if (activity) {
      setShowInfo((prev) => !prev);
    }
  }

  function handleOnMouseLeave() {
    setShowInfo(false);
  }

  return (
    <div
      onMouseLeave={handleOnMouseLeave}
      className={classes}
      onClick={handleClick}
    >
      {showInfo && <CalendarBodyDayInfo description={activity?.description} />}
      <p>{activity?.type}</p>
      {activity?.type ? (
        <CalendarBodyDayHours start={activity?.start} end={activity?.end} />
      ) : (
        ""
      )}
    </div>
  );
}
