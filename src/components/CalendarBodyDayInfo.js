import { useState } from "react";
import "../styles/calendar-info.css";

export default function CalendarBodyDayInfo({ description }) {
  const [list, setList] = useState(() => description.split("|"));

  return (
    <div className="calendar__body__day--info">
      <ol>
        {list.length > 0 &&
          list.map((el) => {
            return <li key={el.split(" ").join("-")}>{el}</li>;
          })}
      </ol>
    </div>
  );
}
