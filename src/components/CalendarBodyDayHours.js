import { nanoid } from "nanoid";
import "../styles/calendar-times-hours.css";

export default function CalendarBodyDayHours(props) {
  return (
    <div className="calendar__time-hours">
      <div>
        <div className="calendar__time-hours--start">{props.start}</div>
        <div className="separator"></div>
        <div className="calendar__time-hours--end">{props.end}</div>
      </div>
    </div>
  );
}
