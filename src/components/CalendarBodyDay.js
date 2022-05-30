import { nanoid } from "nanoid";
import CalendarBodyActivity from "./CalendarBodyActivity";

export default function CalendarBodyDay(props) {
  return (
    <div className="calendar__body--days-single-day">
      <h4
        style={{
          fontSize: "20px",
          margin: "0",
          borderBottom: "1px solid #ddd",
          height: "80px",
          backgroundColor: props.headerTheme,
        }}
        className="flexify-column"
      >
        {props.children}
      </h4>
      <div style={props.styling}>
        {props.activities.activities.length > 0 &&
          [
            ...props.activities.activities,
            ...Array.from({
              length: props.max - props.activities.activities.length,
            }),
          ].map((activity, ind, arr) => {
            const classes = `${ind === arr.length - 1 ? "last-el" : ""} ${
              activity?.type ? "present-activity" : ""
            }`;

            return (
              <CalendarBodyActivity
                key={nanoid()}
                classes={classes}
                activity={activity}
              />
            );
          })}
      </div>
    </div>
  );
}
